const filter = (fi, arr) => {
  if (fi.colunFilter === undefined) {
    return arr;
  }
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

const megaPlanetsFilter = (filt, ar) => {
  let small = ar;
  for (let index = 0; index < filt.length; index += 1) {
    small = filter(filt[index], small);
  }
  return small;
};

export default megaPlanetsFilter;

