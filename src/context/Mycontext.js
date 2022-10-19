import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/planetsAPI';

export const MyContext = createContext({});

class Prov extends React.Component {
  state = {
    nameFilter: '',
    planetsList: [],
    selectedList: [],
  };

  async componentDidMount() {
    const api = await getPlanets();
    const response = api.results;
    const finalList = this.filter(response);
    this.setState({ planetsList: finalList,
      selectedList: finalList });
  }

  handleChange = ({ target }) => {
    const { planetsList } = this.state;
    this.setState({ nameFilter: target.value }, () => {
      const filt = this.filter(planetsList);
      this.setState({ selectedList: filt });
    });
  };

  filter = (arr) => {
    const { nameFilter } = this.state;
    if (nameFilter === '') {
      return arr;
    }
    const filtered = arr.filter((planets) => planets.name.includes(nameFilter));
    return filtered;
  };

  render() {
    const contextValue = {
      ...this.state,
      Change: this.handleChange,
    };
    const { children } = this.props;
    return (
      <div>
        <MyContext.Provider value={ contextValue }>
          {children}
        </MyContext.Provider>
      </div>
    );
  }
}

Prov.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Prov;
