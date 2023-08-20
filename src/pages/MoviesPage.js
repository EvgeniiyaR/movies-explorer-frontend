import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';

const MoviesPage = ({
  isLoggedIn,
  filteredMovies,
  movies,
  handleCreateMovie,
  savedMovies,
  handleDeleteMovie,
  setFilteredMovies,
}) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Movies
        filteredMovies={filteredMovies}
        movies={movies}
        setFilteredMovies={setFilteredMovies}
        handleCreateMovie={handleCreateMovie}
        savedMovies={savedMovies}
        handleDeleteMovie={handleDeleteMovie} />
      <Footer />
    </>
  );
};

export default MoviesPage;
