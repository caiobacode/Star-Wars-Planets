import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/Mycontext';
import ovots from '../services/test';

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

  const { context, nameFilter, filter, count } = useContext(MyContext);
  const map1 = filterName(context, nameFilter);

  useEffect(() => {
    const mapPlanets = filterName(context, nameFilter);
    let len = count;
    if (count !== 0) {
      len = count - 1;
    }

    const pabos = async () => {
      if (filter[len].hasClicked === true) {
        setAlreadyClicked(true);
        const totalfiltered = await ovots(filter, mapPlanets);
        setPl(totalfiltered);
      } else {
        setAlreadyClicked(false);
      }
    };
    if (alreadyClicked === false) {
      setPl(mapPlanets);
    }
    pabos();
  }, [filter, nameFilter, context, count]);

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
            : map1.map((p) => (
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
