import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import MainPage from '../../pages/MainPage';
import MoviesPage from '../../pages/MoviesPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage';
import ProfilePage from '../../pages/ProfilePage';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import { CONFLICT, SERVER_ERROR, UNAUTHORIZED, SERVER_ERROR_TEXT, CONFLICT_TEXT, UNAUTHORIZED_TEXT } from '../../utils/errors';
import { ProtectedRouteElementForUnauthorizedUser } from '../ProtectedRoutes/ProtectedRoutes';

const App = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSavedMovies, setIsLoadingSavedMovies] = useState(false);
  const [isStatusPopupOpen, setIsStatusPopupOpen] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [textPopup, setTextPopup] = useState('');
  const [status, setStatus] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isSearchMovies, setIsSearchMovies] = useState(false);
  const [isSearchSavedMovies, setIsSearchSavedMovies] = useState(false);

  const checkUser = () => {
    mainApi.getUserInfo()
    .then((res) => {
      if (res) {
        setIsLoggedIn(true);
        navigate('/movies');
        setCurrentUser(res);
      } else {
        setIsLoggedIn(false);
      }
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  useEffect(() => {
    setIsLoadingMovies(true);
    if (isLoggedIn) {
      Promise.all([moviesApi.getAllMovies(), mainApi.getMovies()])
      .then(([movies, savedMovies]) => {
        setMovies(movies);
        setSavedMovies(savedMovies);
        setFilteredSavedMovies(savedMovies);
        setIsLoadingMovies(true);
      })
      .catch((err) => {
        setIsLoadingMovies(false);
        console.log(`Возникла ошибка: ${err}`);
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkUser();
  }, [isLoggedIn]);

  useEffect(() => {
    setTimeout(() => {
      setIsStatusPopupOpen(false);
    }, 2000);
  }, [isStatusPopupOpen]);

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    setIsStatus(true);
    mainApi.register(name, email, password)
    .then(() => {
      setIsLoggedIn(true);
      handleLogin(email, password);
      navigate('/movies');
      setIsLoading(false);
      setIsStatusPopupOpen(true);
      setIsStatus(true);
      setTextPopup('Регистрация прошла успешно. Добро пожаловать!');
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(`Возникла ошибка: ${err}`);
      if (err === CONFLICT) {
        setStatus(CONFLICT_TEXT);
      } else if (err === SERVER_ERROR) {
        setStatus(SERVER_ERROR_TEXT);
      } else {
        setStatus('При регистрации пользователя произошла ошибка.');
      }
    });
  };

  const handleLogin = (email, password) => {
    setIsLoading(true);
    mainApi.login(email, password)
    .then(() => {
      setIsLoggedIn(true);
      navigate('/movies');
      setIsLoading(false);
      setIsStatusPopupOpen(true);
      setIsStatus(true);
      setTextPopup('Успешный вход в аккаунт. Добро пожаловать!');
    }).catch((err) => {
      setIsLoading(false);
      console.log(`Возникла ошибка: ${err}`);
      if (err === UNAUTHORIZED) {
        setStatus(UNAUTHORIZED_TEXT);
      } else if (err === SERVER_ERROR) {
        setStatus(SERVER_ERROR_TEXT);
      } else {
        setStatus('При авторизации произошла ошибка.');
      }
    });
  };

  const handleUpdateUser = (name, email) => {
    setIsLoading(true);
    mainApi.editUserInfo(name, email)
    .then((userInfo) => {
      setCurrentUser(userInfo);
      setIsLoading(false);
      setIsEdit(false);
      setIsStatusPopupOpen(true);
      setIsStatus(true);
      setTextPopup('Данные успешно сохранены!');
    }).catch((err) => {
      setIsLoading(false);
      console.log(`Возникла ошибка: ${err}`);
      if (err === CONFLICT) {
        setStatus(CONFLICT_TEXT);
      } else if (err === SERVER_ERROR) {
        setStatus(SERVER_ERROR_TEXT);
      } else {
        setStatus('При обновлении профиля произошла ошибка.');
      }
    });
  };

  const handleSignOut = () => {
    mainApi.deleteCookies()
    .then((res) => {
      if (res) {
        setIsLoggedIn(false);
        navigate('/');
        localStorage.clear();
        setFilteredMovies([]);
        setIsSearchMovies(false);
      }
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  const handleGetSavedMoviesForDelete = () => {
    setIsLoadingMovies(true);
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res);
      const movieIdsFromMovies = res.map((item) => item.movieId);
      const filteredData = filteredSavedMovies
        .filter((item) => movieIdsFromMovies.includes(item.movieId));
      setFilteredSavedMovies(filteredData);
      setIsLoadingMovies(true);
    })
    .catch((err) => {
      setIsLoadingMovies(false);
      console.log(`Возникла ошибка: ${err}`);
    });
  };

  const handleGetSavedMoviesForCreate = () => {
    setIsLoadingMovies(true);
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res);
      const movieIdsFromMovies = movies.map((item) => item.id);
      const filteredData = res
        .filter((item) => movieIdsFromMovies.includes(item.movieId));
      setFilteredSavedMovies(filteredData);
      setIsLoadingMovies(true);
    })
    .catch((err) => {
      setIsLoadingMovies(false);
      console.log(`Возникла ошибка: ${err}`);
    });
  };

  const handleCreateMovie = (
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    movieId) => {
    setIsLoadingMovies(true);
    mainApi.createMovie(
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
      movieId)
    .then(() => {
      setIsLoadingMovies(true);
      handleGetSavedMoviesForCreate();
    })
    .catch((err) => {
      setIsLoadingMovies(false);
      console.log(`Возникла ошибка: ${err}`);
    });
  };

  const handleDeleteMovie = (id) => {
    setIsLoadingMovies(true);
    mainApi.deleteMovie(id)
    .then(() => {
      setIsLoadingMovies(true);
      handleGetSavedMoviesForDelete();
    })
    .catch((err) => {
      setIsLoadingMovies(false);
      console.log(`Возникла ошибка: ${err}`);
    });
  };

  const closeStatusPopup = () => {
    setIsStatusPopupOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} />} />
            <Route
              path="/movies"
              element={<ProtectedRouteElementForUnauthorizedUser
                isLoggedIn={isLoggedIn}
                element={<MoviesPage
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                  isSearchMovies={isSearchMovies}
                  filteredMovies={filteredMovies}
                  setFilteredMovies={setFilteredMovies}
                  savedMovies={savedMovies}
                  setIsSearchMovies={setIsSearchMovies}
                  handleCreateMovie={handleCreateMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  isLoading={isLoading}
                  isLoadingMovies={isLoadingMovies} />} />} />
            <Route
              path="/saved-movies"
              element={<ProtectedRouteElementForUnauthorizedUser
                isLoggedIn={isLoggedIn}
                element={<SavedMoviesPage
                  isLoggedIn={isLoggedIn}
                  filteredSavedMovies={filteredSavedMovies}
                  savedMovies={savedMovies}
                  setFilteredSavedMovies={setFilteredSavedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  isSearchSavedMovies={isSearchSavedMovies}
                  setIsSearchSavedMovies={setIsSearchSavedMovies}
                  isLoadingSavedMovies={isLoadingSavedMovies}
                  setIsLoadingSavedMovies={setIsLoadingSavedMovies}
                  isLoadingMovies={isLoadingMovies} />} />} />
            <Route
              path="/profile"
              element={<ProtectedRouteElementForUnauthorizedUser
                isLoggedIn={isLoggedIn}
                element={<ProfilePage
                  isLoggedIn={isLoggedIn}
                  handleSignOut={handleSignOut}
                  status={status}
                  setStatus={setStatus}
                  isLoading={isLoading}
                  handleUpdateUser={handleUpdateUser}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit} />} />} />
            <Route
              path="/signup"
                element={<RegisterPage
                handleRegister={handleRegister}
                status={status}
                setStatus={setStatus}
                isLoading={isLoading} />} />
            <Route
              path="/signin"
                element={<LoginPage
                handleLogin={handleLogin}
                status={status}
                setStatus={setStatus}
                isLoading={isLoading} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <InfoTooltip
          isOpen={isStatusPopupOpen}
          onClose={closeStatusPopup}
          isStatus={isStatus}
          status={textPopup} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
