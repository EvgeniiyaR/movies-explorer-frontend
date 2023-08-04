import { Link } from "react-scroll";
import './NavTab.css';

const NavTab = () => {
  return (
    <section className="nav-page" aria-label="navigation inter page">
      <nav>
        <ul className="nav-page__list">
          <li><Link className="nav-page__link" to="about-project" smooth={true}>О проекте</Link></li>
          <li><Link className="nav-page__link" to="techs" smooth={true}>Технологии</Link></li>
          <li><Link className="nav-page__link" to="about-me" smooth={true}>Студент</Link></li>
        </ul>
      </nav>
    </section>
  )
}

export default NavTab;
