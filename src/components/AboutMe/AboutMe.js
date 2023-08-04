import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/photo.png';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <p className="about-me__name">Евгения</p>
          <p className="about-me__about">Фронтенд-разработчик</p>
          <p className="about-me__description">Мир веб-разработки привлекает меня своей творческой составляющей и возможностью создавать удивительные пользовательские интерфейсы. Я хочу применить свой опыт и умения, чтобы создавать динамичные и интуитивно понятные веб-приложения.</p>
        <Link className="about-me__link" to="https://github.com/EvgeniiyaR" target="_blank" rel="noreferrer">Github</Link>
      </div>
      <img className="about-me__photo" src={photo} alt="student"></img>
      </div>
    </section>
  )
}

export default AboutMe;
