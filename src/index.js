import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var userData = JSON.parse(document.getElementById('user-data').dataset.users);
//using userData because thats more descriptive
ReactDOM.render(<App userData={userData} />, document.getElementById('root'));
