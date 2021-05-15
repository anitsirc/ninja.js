import React from 'react';
import DataTable from './DataTable';
import './App.css';

// why are we not using typescript to create better code?
// why is the styling been removed from the compoenets they style
// Why are we not using react testing libary for better test readability and ease
// Maybe put something inside .eslingignore, like the build and the module folder
// I have not really looked into if the state is located the right place

const App = ({userData}) => {
  return (
    <div className="container mt-3">
      <DataTable userData={userData} locale="da" rowsPerPage={3} />
    </div>
  )
}

export default App;
