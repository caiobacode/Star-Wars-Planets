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
    comparisonFilter: 'maior que',
    numberFilter: 0,
  }]);

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  const handleChangeNumb = ({ target }) => {
    setNumbInput(target.value);
    console.log(filter);
    const arr = filter;
    const novas = arr[count];
    arr[count] = {
      ...novas,
      numberFilter: target.value,
    };
    setFilter(arr);
  };

  const handleChangeFilter = ({ target }) => {
    const { name, value } = target;
    if (name === 'hasClicked') {
      console.log(filter);
      const talvez = filter[count];
      const newobj = {
        ...talvez,
        hasClicked: true,
      };
      const newobj2 = {
        hasClicked: false,
        colunFilter: 'population',
        comparisonFilter: 'maior que',
        numberFilter: numbInput,
      };
      const goState = filter;
      goState[count] = newobj;
      goState.push(newobj2);
      setFilter(goState);
      setCount(count + 1);
      console.log('vimaqui');
    } else {
      console.log('vimla');
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
    handleChange,
    handleChangeFilter,
    handleChangeNumb,
  }), [nameFilter, numbInput, context, filter,
    handleChange, handleChangeFilter, handleChangeNumb]);

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
