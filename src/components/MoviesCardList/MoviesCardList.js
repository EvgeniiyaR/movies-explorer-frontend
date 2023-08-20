import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import Button from '../Button/Button';
import MoviesCard from '../MoviesCard/MoviesCard';
import NoResultSearch from '../NoResultSearch/NoResultSearch';

const MoviesCardList = ({
  filteredMovies,
  savedMovies,
  filteredSavedMovies,
  handleCreateMovie,
  handleDeleteMovie,
}) => {
  const location = useLocation();
  const savedMoviesID = savedMovies.map((item) => item.movieId);
  const findIdDb = (id) => {
    const foundItem = savedMovies.find((item) => item.movieId === id);
    return foundItem ? foundItem._id : null;
  };

  return (
    <>
      {location.pathname === "/movies" &&
        (filteredMovies.length >= 1 ?
        <section className="movies" aria-label="фильмы">
          <ul className="movies__list">
          {filteredMovies.map(({id, ...props}) => (
            <MoviesCard
              movie={props}
              isSaveMovie={savedMoviesID.includes(id)}
              movieIdDb={findIdDb(id)}
              movieId={id}
              key={id}
              handleCreateMovie={handleCreateMovie}
              handleDeleteMovie={handleDeleteMovie} />
          ))}
          </ul>
          <Button className="movies__button" type="button" text="Ещё" />
        </section>
        :
        <NoResultSearch />)
      }

      {location.pathname === "/saved-movies" &&
        (filteredSavedMovies.length >= 1 ?
        <section className="movies" aria-label="сохраненные фильмы">
          <ul className="movies__list">
            {filteredSavedMovies.map(({movieId, _id, ...props}) => (
            <MoviesCard
              movie={props}
              isSaveMovie={savedMoviesID.includes(movieId)}
              movieIdDb={_id}
              movieId={movieId}
              key={movieId}
              handleDeleteMovie={handleDeleteMovie} />
            ))}
          </ul>
        </section>
        :
        <NoResultSearch />)
      }
    </>
  )
}

export default MoviesCardList;
