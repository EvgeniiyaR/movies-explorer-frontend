import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ savedMovies }) => {
  return (
    <main>
      <SearchForm name="search-form-saved-movies" />
      <MoviesCardList savedMovies={savedMovies} />
    </main>
  )
}

export default SavedMovies;
