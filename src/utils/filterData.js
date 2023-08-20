const filterData = (nameRu, nameEN, duration, isChecked, searchQuery) => {
  return (nameRu.toLowerCase().includes(searchQuery.trim().toLowerCase())
    || nameEN.toLowerCase().includes(searchQuery.trim().toLowerCase()))
    && (isChecked ? duration <= 40 : duration);
};

export const validateSearch = (searchQuery, searchQueryName, setNameError, setMovies, movies, isChecked, moviesName, errorMovies) => {
  localStorage.setItem(searchQueryName, searchQuery);
  if (searchQuery.trim() === '') {
    setNameError('Нужно ввести ключевое слово');
    setMovies(errorMovies);
    localStorage.setItem(moviesName, JSON.stringify(errorMovies));
  } else {
    const filteredData = movies.filter((item) => filterData(item.nameRU, item.nameEN, item.duration, isChecked, searchQuery));
    setMovies(filteredData);
    localStorage.setItem(moviesName, JSON.stringify(filteredData));
  };
};

export const handleCheckboxChange = (isChecked, setIsChecked, isShortFilm, movies, searchQuery, setMovies, moviesName) => {
  setIsChecked(isChecked);
  localStorage.setItem(isShortFilm, String(isChecked));
  const filteredData = movies.filter((item) => filterData(item.nameRU, item.nameEN, item.duration, isChecked, searchQuery));
  setMovies(filteredData);
  localStorage.setItem(moviesName, JSON.stringify(filteredData));
};
