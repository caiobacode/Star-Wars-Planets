import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';

export const MyContext = createContext({});

function Prov(props) {
  const [context, setContext] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filter, setFilter] = useState({
    hasClicked: false,
    colunFilter: 'population',
    comparisonFilter: 'maior que',
    numberFilter: 0,
  });

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  const handleChangeFilter = ({ target }) => {
    const { name, value } = target;
    if (name === 'hasClicked') {
      setFilter({
        ...filter,
        hasClicked: true,
      });
    } else {
      setFilter({
        ...filter,
        hasClicked: false,
        [name]: value });
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
    nameFilter,
    context,
    filter,
    handleChange,
    handleChangeFilter,
  }), [nameFilter, context, filter, handleChange, handleChangeFilter]);
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
