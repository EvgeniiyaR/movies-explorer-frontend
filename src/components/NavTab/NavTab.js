//компонент с навигацией по странице «О проекте»
import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => {
  return (
    <section className="nav-page" aria-label="navigation inter page">
      <nav>
        <ul className="nav-page__list">
          <li><Link className="nav-page__link" to="#">О проекте</Link></li>
          <li><Link className="nav-page__link" to="#">Технологии</Link></li>
          <li><Link className="nav-page__link" to="#">Студент</Link></li>
        </ul>
      </nav>
    </section>
  )
}

export default NavTab;
