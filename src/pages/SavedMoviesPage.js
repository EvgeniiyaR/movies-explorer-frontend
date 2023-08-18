import SavedMovies from '../components/SavedMovies/SavedMovies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const SavedMoviesPage = ({ isLoggedIn, savedMovies }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <SavedMovies savedMovies={savedMovies} />
      <Footer />
    </>
  );
}

export default SavedMoviesPage;
