import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/Mycontext';
import ovots from '../services/test';
import '../css/Table.css'

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
    <div className='table-div'>
      <table>
        <tr>
          <th className='th-item'>Name</th>
          <th className='th-item'>Rotation Period</th>
          <th className='th-item'>Orbital Period</th>
          <th className='th-item'>Diameter</th>
          <th className='th-item'>Climate</th>
          <th className='th-item'>Gravity</th>
          <th className='th-item'>Terrain</th>
          <th className='th-item'>Surface Water</th>
          <th className='th-item'>Population</th>
          <th className='th-item'>Films</th>
          <th className='th-item'>Created</th>
          <th className='th-item'>Edited</th>
          <th className='th-item'>URL</th>
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
                <td className='hover' onClick={() => window.open(p.films)}>{p.films}</td>
                <td>{p.created}</td>
                <td>{p.edited}</td>
                <td className='hover' onClick={() => window.open(p.url)}>{p.url}</td>
              </tr>
            ))
        }
      </table>
    </div>
  );
}

export default Table;
