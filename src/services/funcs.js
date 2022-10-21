const populationFilter = (filt, arra, ovo) => {
  if (filt.comparisonFilter === 'maior que') {
    const filtered = arra.filter((planet) => Number(planet.population) > ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'menor que') {
    const filtered = arra.filter((planet) => Number(planet.population) < ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'igual a') {
    const filtered = arra.filter((planet) => Number(planet.population) === ovo);
    return filtered;
  }
};

const diameterFilter = (filt, arra, ovo) => {
  if (filt.comparisonFilter === 'maior que') {
    const filtered = arra.filter((planet) => Number(planet.diameter) > ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'menor que') {
    const filtered = arra.filter((planet) => Number(planet.diameter) < ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'igual a') {
    const filtered = arra.filter((planet) => Number(planet.diameter) === ovo);
    return filtered;
  }
};

const orbitalFilter = (filt, arra, ovo) => {
  if (filt.comparisonFilter === 'maior que') {
    const filtered = arra.filter((planet) => Number(planet.orbital_period) > ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'menor que') {
    const filtered = arra.filter((planet) => Number(planet.orbital_period) < ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'igual a') {
    const filtered = arra.filter((planet) => Number(planet.orbital_period) === ovo);
    return filtered;
  }
};

const rotationFilter = (filt, arra, ovo) => {
  if (filt.comparisonFilter === 'maior que') {
    const filtered = arra.filter((planet) => Number(planet.rotation_period) > ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'menor que') {
    const filtered = arra.filter((planet) => Number(planet.rotation_period) < ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'igual a') {
    const filtered = arra.filter((planet) => Number(planet.rotation_period) === ovo);
    return filtered;
  }
};

const surfaceFilter = (filt, arra, ovo) => {
  if (filt.comparisonFilter === 'maior que') {
    const filtered = arra.filter((planet) => Number(planet.surface_water) > ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'menor que') {
    const filtered = arra.filter((planet) => Number(planet.surface_water) < ovo);
    return filtered;
  }
  if (filt.comparisonFilter === 'igual a') {
    const filtered = arra.filter((planet) => Number(planet.surface_water) === ovo);
    return filtered;
  }
};

const megaFilter = (fi, arr) => {
  if (fi.hasClicked === true) {
    const finalArr = arr;
    const num = Number(fi.numberFilter);
    switch (fi.colunFilter) {
    case 'population':
      return populationFilter(fi, finalArr, num);
    case 'diameter':
      return diameterFilter(fi, finalArr, num);
    case 'orbital_period':
      return orbitalFilter(fi, finalArr, num);
    case 'rotation_period':
      return rotationFilter(fi, finalArr, num);
    case 'surface_water':
      return surfaceFilter(fi, finalArr, num);
    default:
      break;
    }
  }
  if (fi.hasClicked === false) {
    return arr;
  }
};

export default megaFilter;
