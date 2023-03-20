const filter = (fi, arr) => {
  if (fi.colunFilter === undefined) {
    return arr;
  }
  if (fi.hasClicked === true) {
    const num = Number(fi.numberFilter);
    if (fi.comparisonFilter === 'greater than') {
      const filtered = arr.filter((planet) => Number(planet[fi.colunFilter]) > num);
      return filtered;
    }
    if (fi.comparisonFilter === 'litle than') {
      const filtered = arr.filter((planet) => Number(planet[fi.colunFilter]) < num);
      return filtered;
    }
    if (fi.comparisonFilter === 'equal to') {
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

