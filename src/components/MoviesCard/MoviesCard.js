import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BASE_URL_MOVIES_API } from "../../utils/constants";
import './MoviesCard.css';
import Button from '../Button/Button';

const MoviesCard = ({ movie, movieId, isSave, handleCreateMovie }) => {
  const location = useLocation();
  const handleClick = () => {
    handleCreateMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      `${BASE_URL_MOVIES_API}${movie.image.url}`,
      movie.trailerLink,
      `${BASE_URL_MOVIES_API}${movie.image.formats.thumbnail.url}`,
      movie.nameRU,
      movie.nameEN,
      movie.id);
      console.log(movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        `${BASE_URL_MOVIES_API}${movie.image.url}`,
        movie.trailerLink,
        `${BASE_URL_MOVIES_API}${movie.image.formats.thumbnail.url}`,
        movie.nameRU,
        movie.nameEN,
        movieId);
  };

  const countTime = (duration) => {
    const hour = Math.trunc(duration / 60);
    const minutes = duration - 60 * hour;
    const res = `${hour}ч ${minutes}м`;
    return res;
  };

  return (
    <li className={
      location.pathname === "/movies" ?
      "movies__card movies__card_type_unsaved"
      :
      "movies__card movies__card_type_saved"
      }>
      <Link className="movies__link" to={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies__img" src={`${BASE_URL_MOVIES_API}${movie.image.url}`} alt={movie.nameRU}></img>
      </Link>
      <Button
        className={
          location.pathname === "/saved-movies" ?
          "movies__button-save movies__button-save_type_delete"
          :
          `movies__button-save ${isSave ? "movies__button-save_type_save" : "movies__button-save_type_choose"}`
        }
        type="button"
        text={!isSave && "Сохранить"}
        onClick={!isSave && handleClick} />
      <div className="movies__container-title">
        <h2 className="movies__title">{movie.nameRU}</h2>
        <div className="movies__container-time">
          <p className="movies__time">{countTime(movie.duration)}</p>
        </div>
      </div>
    </li>
  )
}

export default MoviesCard;
