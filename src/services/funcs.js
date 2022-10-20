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

const megaFilter = (fil, arr) => {
  const num = Number(fil.numberFilter);
  switch (fil.colunFilter) {
  case 'population':
    return populationFilter(fil, arr, num);
  case 'diameter':
    return diameterFilter(fil, arr, num);
  case 'orbital_period':
    return orbitalFilter(fil, arr, num);
  case 'rotation_period':
    return rotationFilter(fil, arr, num);
  case 'surface_water':
    return surfaceFilter(fil, arr, num);
  default:
    break;
  }
};

export default megaFilter;
