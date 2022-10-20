import React from 'react';
import { MyContext } from '../context/Mycontext';

function Filters() {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => (
          <label htmlFor="filter">
            Filter:
            <input
              name="filter"
              data-testid="name-filter"
              onChange={ value.handleChange }
            />
          </label>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default Filters;
