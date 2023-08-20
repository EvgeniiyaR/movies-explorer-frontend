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
import { ProtectedRouteElementForAuthorizedUser, ProtectedRouteElementForUnauthorizedUser } from '../ProtectedRoutes/ProtectedRoutes';

const App = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStatusPopupOpen, setIsStatusPopupOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [status, setStatus] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState(JSON.parse(localStorage.getItem('savedFilteredMovies')) || savedMovies);

  const checkUser = () => {
    mainApi.getUserInfo()
    .then((res) => {
      if (res) {
        setIsLoggedIn(true);
        navigate('/');
        setCurrentUser(res);
      } else {
        setIsLoggedIn(false);
      }
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([moviesApi.getAllMovies(), mainApi.getMovies()])
      .then(([movies, savedMovies]) => {
        setMovies(movies);
        setSavedMovies(savedMovies);
        if (!localStorage.getItem('savedFilteredMovies')) {
          localStorage.setItem('savedFilteredMovies', JSON.stringify(savedMovies));
          setFilteredSavedMovies(savedMovies);
        };
      })
      .catch((err) => console.log(`Возникла ошибка: ${err}`));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkUser();
  }, [isLoggedIn]);

  const handleRegister = (name, email, password) => {
    setIsLoading(true);
    mainApi.register(name, email, password)
    .then(() => {
      setIsLoggedIn(true);
      handleLogin(email, password);
      navigate('/movies');
      setIsLoading(false);
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

  const handleUpdateUser = (name, email, isEdit) => {
    setIsLoading(true);
    mainApi.editUserInfo(name, email)
    .then((userInfo) => {
      setCurrentUser(userInfo);
      setIsLoading(false);
      setIsEdit(false);
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
        navigate('/signin');
        localStorage.clear();
      }
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  const handleGetSavedMovies = () => {
    mainApi.getMovies()
    .then((res) => {
      setSavedMovies(res);
      const movieIdsFromMovies = movies.map((item) => item.id);

      const filteredData = res
        .filter((item) => movieIdsFromMovies.includes(item.movieId));

      setFilteredSavedMovies(filteredData);
      localStorage.setItem('savedFilteredMovies', JSON.stringify(filteredData));
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  const handleCreateMovie = (country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN, movieId) => {
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
      handleGetSavedMovies();
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
  };

  const handleDeleteMovie = (id) => {
    mainApi.deleteMovie(id)
    .then(() => {
      handleGetSavedMovies();
    })
    .catch((err) => console.log(`Возникла ошибка: ${err}`));
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
                  filteredMovies={filteredMovies}
                  setFilteredMovies={setFilteredMovies}
                  savedMovies={savedMovies}
                  handleCreateMovie={handleCreateMovie}
                  handleDeleteMovie={handleDeleteMovie} />} />} />
            <Route
              path="/saved-movies"
              element={<ProtectedRouteElementForUnauthorizedUser
                isLoggedIn={isLoggedIn}
                element={<SavedMoviesPage
                  isLoggedIn={isLoggedIn}
                  filteredSavedMovies={filteredSavedMovies}
                  savedMovies={savedMovies}
                  setFilteredSavedMovies={setFilteredSavedMovies}
                  handleDeleteMovie={handleDeleteMovie} />} />} />
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
              element={<ProtectedRouteElementForAuthorizedUser
                isLoggedIn={isLoggedIn}
                element={<RegisterPage
                  handleRegister={handleRegister}
                  status={status}
                  setStatus={setStatus}
                  isLoading={isLoading} />}
              />} />
            <Route
              path="/signin"
              element={<ProtectedRouteElementForAuthorizedUser
                isLoggedIn={isLoggedIn}
                element={<LoginPage
                  handleLogin={handleLogin}
                  status={status}
                  setStatus={setStatus}
                  isLoading={isLoading} />} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <InfoTooltip isOpen={isStatusPopupOpen} onClose={closeStatusPopup} isStatus={false} status="Вы ввели неправильный логин или пароль." />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
