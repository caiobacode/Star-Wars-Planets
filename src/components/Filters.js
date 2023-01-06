import React from 'react';
import { MyContext } from '../context/Mycontext';
import '../css/Filters.css'
import trashImg from '../Media/trash-can.png'

function Filters() {
  const returnString = (fil) => {
    console.log(fil);
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
            <div className='filters'>
              <div className='only-filters'>
              <div className='main-filters'>
              <div className='main-filters-another-div'>
              <label className='filter-label' htmlFor="filter">
                Filter:
                <input
                  name="filter"
                  data-testid="name-filter"
                  type="text"
                  className='filter-input'
                  onChange={ value.handleChange }
                />
              </label>
              <div className='input-options'>
              <label className='colun-label' htmlFor='colunFilter'>
                Coluna
              <select
                name="colunFilter"
                className='colun-input'
                data-testid="column-filter"
                onChange={ value.handleChangeFilter }
              >
                {
                  options.map((e) => (
                    <option key={ e }>{e}</option>
                  ))
                }
              </select>
              </label>
              <select
                name="comparisonFilter"
                className='comparison-input'
                data-testid="comparison-filter"
                onChange={ value.handleChangeFilter }
              >
                <option>maior que</option>
                <option>menor que</option>
                <option>igual a</option>
              </select>
              <label className='number-label' htmlFor="numberFilter">
                Number filter
                <input
                  name="numberFilter"
                  data-testid="value-filter"
                  type="number"
                  value={ numbInput }
                  className='number-input'
                  onChange={ handleChangeNumb }
                />
              </label>
              </div>
              </div>
              <button
                type="button"
                name="hasClicked"
                className='filter-btn'
                disabled={!options.length > 0}
                data-testid="button-filter"
                onClick={ value.handleChangeFilter }
              >
                Filter
              </button>
              </div>
              <div className='ordenate-div'>
              <div className='ordenate-filters'>
              <select
                className='order-options'
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
              <label className='asce-label' htmlFor="sort">
                Ascendende
                <input
                  className='asce'
                  name="sort"
                  data-testid="column-sort-input-asc"
                  type="radio"
                  value="ASC"
                  onClick={ handleChangeOrder }
                />
              </label>
              <label className='desc-label' htmlFor="sort">
                Descendente
                <input
                  name="sort"
                  className='desc'
                  data-testid="column-sort-input-desc"
                  type="radio"
                  value="DESC"
                  onClick={ handleChangeOrder }
                />
              </label>
              </div>
              <button
                className='ordenate-btn'
                data-testid="column-sort-button"
                type="button"
                onClick={ handleAttOrder }
              >
                Ordenar
              </button>
              </div>
              <div className='remove-filters-btn-div'>

              <button
                type="button"
                name="deleteFilters"
                className='remove-filters-btn'
                data-testid="button-remove-filters"
                onClick={ value.handleDeleteFilters }
                >
                Remover filtros
              </button>
              </div>
              </div>
              <div className='delete-filters'>
                {
                  verifyFilter(filter) && (
                    <div>
                      {
                        filter.map((f, index) => {
                          if (index === filter.length - 1 && filter.length > 1) return;
                          return (
                            <div className='added-filter-div' data-testid="filter" key={ f.colunFilter }>
                              <text className='added-filter'>{returnString(f)}</text>
                              <button
                                className='added-filter-btn'
                                onClick={ () => deleteActualFilter(f) }
                                type="button"
                              >
                                <img className='remove-btn-img' alt='remove-btn-img' src={trashImg} />

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
