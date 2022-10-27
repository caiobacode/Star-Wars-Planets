import React from 'react';
import { MyContext } from '../context/Mycontext';

function Filters() {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          const { numbInput, handleChangeNumb, options } = value;
          return (
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
                {
                  options.map((e) => (
                    <option key={ e }>{e}</option>
                  ))
                }
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
                  value={ numbInput }
                  onChange={ handleChangeNumb }
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
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Filters;
