import React, { useEffect, useState } from 'react';
import getPlanets from '../services/planetsAPI';

function Table() {
  const [planets, setPlanets] = useState(['', false]);
  useEffect(() => {
    async function fetchData() {
      const api = await getPlanets();
      if (planets[0] === '') {
        setPlanets([api, true]);
        console.log(api);
      }
    }
    fetchData();
  }, []);

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
          planets[1] ? planets[0].results.map((p) => (
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
            : <p>carregando</p>
        }
      </table>
    </div>
  );
}

export default Table;
