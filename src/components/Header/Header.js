import { Link, Route, Routes, useNavigate, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

const Header = ({ isLoggedIn }) => {
  return (
  <header className={`header ${!isLoggedIn && "header_type_main"}`}>
    <div className="header__container">
      <Link className="header__link header__link_type_logo" to="/"><img className="header__logo" src={logo} alt="logo"></img></Link>
      {isLoggedIn ?
        <Navigation />
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
