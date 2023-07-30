import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

const Main = () => {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
    </>
  )
}

export default Main;