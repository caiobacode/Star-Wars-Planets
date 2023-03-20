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
          const { numbInput, handleChangeNumb, options, filter, deleteActualFilter, 
            handleChangeOrder, handleAttOrder, handleChange, handleChangeFilter, 
            handleDeleteFilters } = value;
          return (
            <div className='filters'>
              <div className='input-ordenate'>
              <div className='input-div'>
                <h3 className='delete-title'>Filter planets</h3>
               <label className='filter-name-label' htmlFor="filter">
                Filter by name
                <input
                  name="filter"
                  data-testid="name-filter"
                  type="text"
                  className='filter-name-input'
                  onChange={ handleChange }
                />
              </label>
              <div>

              <label className='colun-label' htmlFor='colunFilter'>
                Filter by column
              <select
                name="colunFilter"
                className='colun-input'
                data-testid="column-filter"
                onChange={ handleChangeFilter }
                >
                {
                  options.map((e) => (
                    <option key={ e }>{e}</option>
                    ))
                }
              </select>
              </label>
              <label className='comparison-label' htmlFor='comparisonFilter'>
                Comparison
              <select
                name="comparisonFilter"
                className='comparison-input'
                data-testid="comparison-filter"
                onChange={ handleChangeFilter }
                >
                <option>greater than</option>
                <option>litle than</option>
                <option>equal to</option>
              </select>
              </label>
              <label className='value-label' htmlFor="numberFilter">
                Value
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
              <button
                type="button"
                name="hasClicked"
                className='filter-btn'
                disabled={!options.length > 0}
                data-testid="button-filter"
                onClick={ handleChangeFilter }
              >
                Filter
              </button>
              </div>

              <div className='ordenate-div'>
              <label className='order-label' htmlFor='colun'>Order by
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
              </label>
              <label className='asce-label' htmlFor="sort">
                 Ascending
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
                Descending
                <input
                  name="sort"
                  className='desc'
                  data-testid="column-sort-input-desc"
                  type="radio"
                  value="DESC"
                  onClick={ handleChangeOrder }
                  />
              </label>
              <button
                className='ordenate-btn'
                data-testid="column-sort-button"
                type="button"
                onClick={ handleAttOrder }
                >
                Order
              </button>
                </div>
             </div>
            <div className='delete-filters-div'>
              <h3 className='delete-title'>Added filters</h3>
              <div className='added-filters'>
                {
                  verifyFilter(filter) && (
                    <div>
                      {
                        filter.map((f, index) => {
                          if (index === filter.length - 1 && filter.length > 1) return <div></div>;
                          return (
                            <div className='added-filter-div' data-testid="filter" key={ f.colunFilter }>
                              <text className='added-filter-name'>{returnString(f)}</text>
                              <button
                                className='remove-this-filter-btn'
                                onClick={ () => deleteActualFilter(f) }
                                type="button"
                              >
                                <img className='remove-filter-img' alt='remove-btn-img' src={trashImg} />

                              </button>
                            </div>
                          );
                        })
                      }
                    </div>
                  )
                }
                </div>
                <button
                type="button"
                name="deleteFilters"
                className='remove-all-filters-btn'
                data-testid="button-remove-filters"
                onClick={ handleDeleteFilters }
                >
                Delete filters
              </button>
              </div>
              </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Filters;
