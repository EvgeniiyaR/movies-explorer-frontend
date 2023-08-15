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
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className="about-me__link" to="https://github.com/EvgeniiyaR" target="_blank" rel="noreferrer">Github</Link>
      </div>
      <img className="about-me__photo" src={photo} alt="student"></img>
      </div>
    </section>
  )
}

export default AboutMe;
