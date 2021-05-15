import React from 'react';
import DataTable from './DataTable';
import './App.css';

const App = ({userData}) => {
  return (
    <div className="container mt-3">
      <DataTable userData={userData} locale="da" rowsPerPage={5} />
    </div>
  )
}

export default App;
