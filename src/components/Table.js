import React from 'react';
import { MyContext } from '../context/Mycontext';

function Table() {
  return (
    <div>
      <MyContext.Consumer>
        { (value) => {
          const planets = value.selectedList;
          return (
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
                planets.map((p) => (
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
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Table;
