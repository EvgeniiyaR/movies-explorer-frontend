import SavedMovies from '../components/SavedMovies/SavedMovies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const SavedMoviesPage = ({
  isLoggedIn,
  savedMovies,
  setFilteredSavedMovies,
  handleDeleteMovie,
  filteredSavedMovies,
}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SavedMovies
        savedMovies={savedMovies}
        filteredSavedMovies={filteredSavedMovies}
        setFilteredSavedMovies={setFilteredSavedMovies}
        handleDeleteMovie={handleDeleteMovie} />
      <Footer />
    </>
  );
};

export default SavedMoviesPage;
