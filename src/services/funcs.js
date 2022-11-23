const megaFilter = (fi, arr) => {
  if (fi.hasClicked === true) {
    const num = Number(fi.numberFilter);
    if (fi.comparisonFilter === 'maior que') {
      const filtered = arr.filter((planet) => Number(planet[fi.colunFilter]) > num);
      return filtered;
    }
    if (fi.comparisonFilter === 'menor que') {
      const filtered = arr.filter((planet) => Number(planet[fi.colunFilter]) < num);
      return filtered;
    }
    if (fi.comparisonFilter === 'igual a') {
      const filtered = arr
        .filter((planet) => Number(planet[fi.colunFilter]) === num);
      return filtered;
    }
  }
  if (fi.hasClicked === false) {
    return arr;
  }
};

export default megaFilter;
