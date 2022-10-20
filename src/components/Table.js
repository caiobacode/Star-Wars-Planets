import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/Mycontext';
import megaFilter from '../services/funcs';

function Table() {
  const filterName = (arr, name) => {
    if (name === '') {
      return arr;
    }
    const filtered = arr.filter((planet) => planet.name.includes(name));
    return filtered;
  };

  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [pl, setPl] = useState();

  const { context, nameFilter, filter } = useContext(MyContext);
  const mapPlanets = filterName(context, nameFilter);

  useEffect(() => {
    const pabos = async () => {
      console.log(filter);
      if (filter.hasClicked === true) {
        setAlreadyClicked(true);
        console.log('aqui');
        const mega = megaFilter(filter, mapPlanets);
        setPl(mega);
      }
    };
    if (alreadyClicked === false) {
      setPl(mapPlanets);
    }
    pabos();
  }, [nameFilter, context, filter, mapPlanets]);

  /* const planets = value.context;
          const { nameFilter, filter } = value;
          const pfvFunciona = megaFilter(filter, mapPlanets);
          if (filter.hasClicked && alreadyClicked === false) {
            setAlreadyClicked(true)
            setPl(pfvFunciona)
          }
          if (alreadyClicked === true && filter.hasClicked === true) {
            if (pfvFunciona !== pl) {
              setPl(pfvFunciona)
            }
          }
  */

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        {
          alreadyClicked ? pl.map((p) => (
            <tr key={ p.name }>
              <td>{p.name}</td>
              <td>{p.rotation_period}</td>
              <td>{p.orbital_period}</td>
              <td>{p.diameter}</td>
              <td>{p.climate}</td>
              <td>{p.gravity}</td>
              <td>{p.terrain}</td>
              <td>{p.surface_water}</td>
              <td>{p.population}</td>
              <td>{p.films}</td>
              <td>{p.created}</td>
              <td>{p.edited}</td>
              <td>{p.url}</td>
            </tr>
          ))
            : mapPlanets.map((p) => (
              <tr key={ p.name }>
                <td>{p.name}</td>
                <td>{p.rotation_period}</td>
                <td>{p.orbital_period}</td>
                <td>{p.diameter}</td>
                <td>{p.climate}</td>
                <td>{p.gravity}</td>
                <td>{p.terrain}</td>
                <td>{p.surface_water}</td>
                <td>{p.population}</td>
                <td>{p.films}</td>
                <td>{p.created}</td>
                <td>{p.edited}</td>
                <td>{p.url}</td>
              </tr>
            ))
        }
      </table>
    </div>
  );
}

export default Table;
