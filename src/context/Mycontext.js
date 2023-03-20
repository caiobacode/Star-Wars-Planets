import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';

export const MyContext = createContext({});

function Prov(props) {
  const [context, setContext] = useState([]);
  const [numbInput, setNumbInput] = useState(0);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState([{
    hasClicked: false,
    colunFilter: 'population',
    comparisonFilter: 'greater than',
    numberFilter: 0,
  }]);
  const [options, setOptions] = useState([
    'population',
    'diameter',
    'orbital_period',
    'rotation_period',
    'surface_water',
  ]);
  const [primalOrder, setPrimalOrder] = useState({
    colun: 'population',
    sort: 'ASC',
    hasClicked: false,
  });
  const [order, setOrder] = useState({
    colun: 'population',
    sort: 'ASC',
    hasClicked: true,
  });

  const handleChangeOrder = ({ target }) => {
    const { value, name } = target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleAttOrder = () => {
    setPrimalOrder(order);
  };

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  const deleteActualFilter = (filt) => {
    const newFilter = filter.filter((f) => f.colunFilter !== filt.colunFilter);
    const newOptions = options;
    newOptions.push(filt.colunFilter);
    setOptions(newOptions);
    setFilter(newFilter);
    setCount(count - 1);
  };

  const handleChangeOptions = (str) => {
    const arr = options.filter((e) => e !== str);
    setOptions(arr);
  };

  const handleChangeNumb = ({ target }) => {
    setNumbInput(target.value);
    const arr = filter;
    const novas = arr[count];
    arr[count] = {
      ...novas,
      numberFilter: target.value,
    };
    setFilter(arr);
  };

  const handleDeleteFilters = () => {
    setOptions([
      'population',
      'diameter',
      'orbital_period',
      'rotation_period',
      'surface_water']);
    setCount(0);
    setFilter([{
      hasClicked: false,
      colunFilter: 'population',
      comparisonFilter: 'greater than',
      numberFilter: 0,
    }]);
  };

  const handleChangeFilter = ({ target }) => {
    const { name, value } = target;
    if (name === 'hasClicked') {
      handleChangeOptions(filter[count].colunFilter);
      const nsei = (param) => {
        if (options[0] === param) {
          return options[1];
        }
        return options[0];
      };
      const talvez = filter[count];
      const newobj = {
        ...talvez,
        hasClicked: true,
      };
      const newobj2 = {
        hasClicked: false,
        colunFilter: nsei(filter[count].colunFilter),
        comparisonFilter: 'greater than',
        numberFilter: numbInput,
      };
      const goState = filter;
      goState[count] = newobj;
      goState.push(newobj2);
      setFilter(goState);
      setCount(count + 1);
    } else {
      const arr = filter;
      const novas = arr[count];
      arr[count] = {
        ...novas,
        [name]: value,
      };
      setFilter(arr);
    }
  };

  useEffect(() => {
    const getApi = async () => {
      const api = await getPlanets();
      const response = api.results;
      setContext(response);
    };
    getApi();
  }, []);

  const cont = useMemo(() => ({
    count,
    nameFilter,
    context,
    filter,
    numbInput,
    options,
    handleChange,
    handleChangeFilter,
    handleChangeNumb,
    handleChangeOrder,
    deleteActualFilter,
    handleDeleteFilters,
    handleAttOrder,
    primalOrder,
  }), [nameFilter, numbInput, context, filter, options, primalOrder,
    deleteActualFilter, handleChangeOrder, handleChange, handleAttOrder,
    handleChangeFilter, handleChangeNumb, handleDeleteFilters]);

  const { children } = props;
  return (
    <div>
      <MyContext.Provider value={ cont }>
        {children}
      </MyContext.Provider>
    </div>
  );
}

Prov.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Prov;
