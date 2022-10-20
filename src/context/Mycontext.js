import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';

export const MyContext = createContext({});

function Prov(props) {
  const [context, setContext] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
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
    handleChange,
  }), [nameFilter, context, handleChange]);
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
