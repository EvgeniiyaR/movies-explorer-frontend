import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ movies, handleCreateMovie }) => {
  return (
    <main>
      <SearchForm name="search-form-movies" />
      <MoviesCardList movies={movies} handleCreateMovie={handleCreateMovie} />
    </main>
  )
}

export default Movies;