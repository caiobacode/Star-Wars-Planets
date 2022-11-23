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

  const verifyOrder = (arr1, arr2, order) => {
    if (order.hasClicked === true) return arr2;
    return arr1;
  };

  const [alreadyClicked, setAlreadyClicked] = useState(false);
  const [pl, setPl] = useState();

  const { context, nameFilter, filter, count, primalOrder } = useContext(MyContext);

  const contextArray = [...context];
  const ordenedArray = contextArray.sort((a, b) => {
    const MENOS_UM = -1;
    if (primalOrder.sort === 'DESC') {
      if (b[primalOrder.colun] === 'unknown') return MENOS_UM;
      return b[primalOrder.colun] - a[primalOrder.colun];
    }
    if (b[primalOrder.colun] === 'unknown') return MENOS_UM;
    return a[primalOrder.colun] - b[primalOrder.colun];
  });
  const hasOrdened = verifyOrder(context, ordenedArray, primalOrder);
  const map1 = filterName(hasOrdened, nameFilter);

  useEffect(() => {
    const mapPlanets = filterName(hasOrdened, nameFilter);
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
  }, [filter, nameFilter, alreadyClicked, context, primalOrder, count]);

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
              <td data-testid="planet-name">{p.name}</td>
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
                <td data-testid="planet-name">{p.name}</td>
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
