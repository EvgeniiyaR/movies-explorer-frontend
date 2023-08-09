import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage';
import MoviesPage from '../../pages/MoviesPage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import SavedMoviesPage from '../../pages/SavedMoviesPage';
import ProfilePage from '../../pages/ProfilePage';
import { ProtectedRouteElementForAuthorizedUser, ProtectedRouteElementForUnauthorizedUser } from '../ProtectedRoutes/ProtectedRoutes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="body">
      <div className="page">
        <Routes>
          <Route path="/" element={<ProtectedRouteElementForAuthorizedUser isLoggedIn={isLoggedIn} element={<MainPage />} />}/>
          <Route path="/movies" element={<ProtectedRouteElementForUnauthorizedUser isLoggedIn={isLoggedIn} element={<MoviesPage isLoggedIn={isLoggedIn} />} />} />
          <Route path="/saved-movies" element={<ProtectedRouteElementForUnauthorizedUser isLoggedIn={isLoggedIn} element={<SavedMoviesPage isLoggedIn={isLoggedIn} />} />} />
          <Route path="/profile" element={<ProtectedRouteElementForUnauthorizedUser isLoggedIn={isLoggedIn} element={<ProfilePage isLoggedIn={isLoggedIn} />} />} />
          <Route path="/signup" element={<ProtectedRouteElementForAuthorizedUser isLoggedIn={isLoggedIn} element={<RegisterPage />} />} />
          <Route path="/signin" element={<ProtectedRouteElementForAuthorizedUser isLoggedIn={isLoggedIn} element={<LoginPage />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
