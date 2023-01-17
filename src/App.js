import React from 'react';
import './App.css';
import Prov from './context/Mycontext';
import Table from './components/Table';
import Filters from './components/Filters';
import Header from './components/Header';

function App() {
  return (
    <Prov>
      <Header />
      <Filters />
      <Table />
    </Prov>
  );
}

export default App;
