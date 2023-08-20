import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
  savedMovies,
  setFilteredSavedMovies,
  handleDeleteMovie,
  filteredSavedMovies,
}) => {
  return (
    <main>
      <SearchForm
        name="search-form-saved-movies"
        setFilteredSavedMovies={setFilteredSavedMovies}
        savedMovies={savedMovies}
        filteredSavedMovies={filteredSavedMovies} />
      <MoviesCardList
        filteredSavedMovies={filteredSavedMovies}
        savedMovies={savedMovies}
        handleDeleteMovie={handleDeleteMovie} />
    </main>
  )
};

export default SavedMovies;
