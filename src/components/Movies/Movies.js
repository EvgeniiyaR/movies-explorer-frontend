import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({
  movies,
  filteredMovies,
  handleCreateMovie,
  savedMovies,
  handleDeleteMovie,
  setFilteredMovies,
}) => {
  return (
    <main>
      <SearchForm name="search-form-movies" setFilteredMovies={setFilteredMovies} movies={movies} />
      <MoviesCardList
        filteredMovies={filteredMovies}
        handleCreateMovie={handleCreateMovie}
        savedMovies={savedMovies}
        handleDeleteMovie={handleDeleteMovie} />
    </main>
  )
};

export default Movies;