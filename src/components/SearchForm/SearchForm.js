import { useState } from 'react';
import './SearchForm.css';
import Input from '../Input/Input';
import Form from '../Form/Form';
import Button from '../Button/Button';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {validateSearch, handleCheckboxChange} from '../../utils/filterData';

const SearchForm = ({
  name,
  movies,
  setFilteredMovies,
  savedMovies,
  filteredSavedMovies,
  setFilteredSavedMovies,
}) => {
  const [searchQueryFilteredMovies, setSearchQueryFilteredMovies] = useState(localStorage.getItem('searchQueryFilteredMovies') || '');
  const [searchQuerySavedMovies, setSearchQuerySavedMovies] = useState(localStorage.getItem('searchQuerySavedMovies') || '');

  const [isCheckedFilteredMovies, setIsCheckedFilteredMovies] = useState(localStorage.getItem('isShortFilmFilteredMovies') === 'true');
  const [isCheckedSavedMovies, setIsCheckedSavedMovies] = useState(localStorage.getItem('isShortFilmSavedMovies') === 'true');

  const [nameError, setNameError] = useState('');

  const handleSubmitSearchFilteredMovies = (e) => {
    e.preventDefault();
    setNameError('');
    validateSearch(
      searchQueryFilteredMovies,
      'searchQueryFilteredMovies',
      setNameError,
      setFilteredMovies,
      movies,
      isCheckedFilteredMovies,
      'filteredMovies', []);
  };

  const handleSubmitSearchSavedMovies = (e) => {
    e.preventDefault();
    setNameError('');
    validateSearch(
      searchQuerySavedMovies,
      'searchQuerySavedMovies',
      setNameError,
      setFilteredSavedMovies,
      filteredSavedMovies,
      isCheckedSavedMovies,
      'savedFilteredMovies',
      savedMovies);
  };

  const handleCheckboxChangeFilteredMovies = (isChecked) => {
    handleCheckboxChange(
      isChecked,
      setIsCheckedFilteredMovies,
      'isShortFilmFilteredMovies',
      movies,
      searchQueryFilteredMovies,
      setFilteredMovies,
      'filteredMovies');
  };

  const handleCheckboxChangeSavedMovies = (isChecked) => {
    handleCheckboxChange(
      isChecked,
      setIsCheckedSavedMovies,
      'isShortFilmSavedMovies',
      savedMovies,
      searchQuerySavedMovies,
      setFilteredSavedMovies,
      'savedFilteredMovies');
  };

  return (
    <section className="search" aria-label="поиск фильмов">
      <Form
        className="search__form"
        name={name}
        onSubmit={movies ? (e) => handleSubmitSearchFilteredMovies(e) : (e) => handleSubmitSearchSavedMovies(e)}>
        <div className="search__form-container">
          <div className="search__form-container-input">
            <div className="search__icon-search"></div>
            <Input
              classNameLabel="search__label"
              classNameInput="search__input"
              type="search"
              name="search-input"
              placeholder="Фильм"
              required="required"
              value={movies ? searchQueryFilteredMovies : searchQuerySavedMovies}
              onChange={movies ? (e) => setSearchQueryFilteredMovies(e.target.value) : (e) => setSearchQuerySavedMovies(e.target.value)} />
            <Button className="search__button" type="submit" text="Найти" />
          </div>
          <div className="search__checkbox-filter">
            <FilterCheckbox
              name={`${name}-checkbox`}
              isChecked={movies ? isCheckedFilteredMovies : isCheckedSavedMovies}
              setCheckbox={movies ? handleCheckboxChangeFilteredMovies : handleCheckboxChangeSavedMovies} />
            <p className="search__checkbox-title">Короткометражки</p>
          </div>
        </div>
      </Form>
      <p className="search__error">{nameError}</p>
    </section>
  )
};

export default SearchForm;
