import React from 'react';
import './App.css';
import Prov from './context/Mycontext';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <Prov>
      <Filters />
      <Table />
    </Prov>
  );
}

export default App;
