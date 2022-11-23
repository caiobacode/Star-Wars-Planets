import React from 'react';
import { MyContext } from '../context/Mycontext';

function Filters() {
  const returnString = (fil) => {
    console.log('qubra linha');
    return `${fil.colunFilter} ${fil.comparisonFilter} ${fil.numberFilter}`;
  };

  const verifyFilter = (fi) => !(fi.length <= 1 && fi[0].hasClicked === false);
  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          const { numbInput, handleChangeNumb, options,
            filter, deleteActualFilter, handleChangeOrder, handleAttOrder } = value;
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
              <button
                type="button"
                name="deleteFilters"
                data-testid="button-remove-filters"
                onClick={ value.handleDeleteFilters }
              >
                Remover filtros
              </button>
              <select
                name="colun"
                data-testid="column-sort"
                onChange={ handleChangeOrder }
              >
                <option>population</option>
                <option>diameter</option>
                <option>orbital_period</option>
                <option>rotation_period</option>
                <option>surface_water</option>
              </select>
              <label htmlFor="sort">
                Ascendende
                <input
                  name="sort"
                  data-testid="column-sort-input-asc"
                  type="radio"
                  value="ASC"
                  onClick={ handleChangeOrder }
                />
              </label>
              <label htmlFor="sort">
                Descendente
                <input
                  name="sort"
                  data-testid="column-sort-input-desc"
                  type="radio"
                  value="DESC"
                  onClick={ handleChangeOrder }
                />
              </label>
              <button
                data-testid="column-sort-button"
                type="button"
                onClick={ handleAttOrder }
              >
                Ordenar
              </button>
              <div>
                {
                  verifyFilter(filter) && (
                    <div>
                      {
                        filter.map((f, index) => {
                          if (index === filter.length - 1 && filter.length > 1) return;
                          return (
                            <div data-testid="filter" key={ f.colunFilter }>
                              <p>{returnString(f)}</p>
                              <button
                                onClick={ () => deleteActualFilter(f) }
                                type="button"
                              >
                                Delete Filter

                              </button>
                            </div>
                          );
                        })
                      }
                    </div>
                  )
                }
              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Filters;
