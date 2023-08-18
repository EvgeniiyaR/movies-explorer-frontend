import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Movies from '../components/Movies/Movies';

const MoviesPage = ({ isLoggedIn, movies, handleCreateMovie }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Movies movies={movies} handleCreateMovie={handleCreateMovie} />
      <Footer />
    </>
  );
}

export default MoviesPage;
