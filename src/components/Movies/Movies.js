import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Main = () => {
  return (
    <>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
    </>
  )
}

export default Main;