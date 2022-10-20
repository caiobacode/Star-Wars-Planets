import React from 'react';
import { MyContext } from '../context/Mycontext';

function Filters() {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => (
          <div>
            <label htmlFor="filter">
              Filter:
              <input
                name="filter"
                data-testid="name-filter"
                type="text"
                onChange={ value.handleChange }
              />
            </label>
            Coluna
            <select
              name="colunFilter"
              data-testid="column-filter"
              onChange={ value.handleChangeFilter }
            >
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
            <select
              name="comparisonFilter"
              data-testid="comparison-filter"
              onChange={ value.handleChangeFilter }
            >
              <option>maior que</option>
              <option>menor que</option>
              <option>igual a</option>
            </select>
            <label htmlFor="numberFilter">
              Number filter:
              <input
                name="numberFilter"
                data-testid="value-filter"
                type="number"
                value={ value.filter.numberFilter }
                onChange={ value.handleChangeFilter }
              />
            </label>
            <button
              type="button"
              name="hasClicked"
              data-testid="button-filter"
              onClick={ value.handleChangeFilter }
            >
              Filter
            </button>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default Filters;
