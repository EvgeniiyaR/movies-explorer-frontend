import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  return (
  <header className={`header ${!isLogin && "header_type_main"}`}>
    <div className="header__container">
      <Link className="header__link header__link_type_logo" to="/"><img className="header__logo" src={logo} alt="logo"></img></Link>
      {isLogin ?
        <nav>
          <ul className="header__list">
            <li><Link className="header__link" to="/movies">Фильмы</Link></li>
            <li><Link className="header__link" to="/saved-movies">Сохраненные фильмы</Link></li>
            <li><Link className="header__link" to="/profile">Аккаунт</Link></li>
          </ul>
        </nav>
        :
        <nav>
          <ul className="header__list">
            <li><Link className="header__link" to="/signup">Регистрация</Link></li>
            <li><Link className="header__link header__link_type_login" to="/signin">Войти</Link></li>
          </ul>
        </nav>
      }
    </div>
  </header>
  )
}

export default Header;
