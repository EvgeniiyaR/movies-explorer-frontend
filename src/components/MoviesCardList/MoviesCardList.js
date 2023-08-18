import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import Button from '../Button/Button';
import MoviesCard from '../MoviesCard/MoviesCard';
import coverTwo from '../../images/2-cover.jpg';
import coverSix from '../../images/6-cover.jpg';
import coverTen from '../../images/10-cover.jpg';

const MoviesCardList = ({ movies, savedMovies, handleCreateMovie }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/movies" &&
      <section className="movies" aria-label="фильмы">
        <ul className="movies__list">
        {movies.map(({id, ...props}) => (
          <MoviesCard movie={props} movieId={id} key={id} isSave={false} handleCreateMovie={handleCreateMovie} />
        ))}
        </ul>
        <Button className="movies__button" type="button" text="Ещё" />
      </section>
      }

      {location.pathname === "/saved-movies" &&
        <section className="movies" aria-label="сохраненные фильмы">
          <ul className="movies__list">
            <MoviesCard image={coverTwo} title="Киноальманах «100 лет дизайна»" time="1ч 17м" isSave={true} />
            <MoviesCard image={coverSix} title="Книготорговцы" time="1ч 17м" isSave={true} />
            <MoviesCard image={coverTen} title="Соберись перед прыжком" time="1ч 17м" isSave={true} />
          </ul>
        </section>
      }
    </>
  )
}

export default MoviesCardList;
