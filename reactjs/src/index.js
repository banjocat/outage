import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

console.log(process.env);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
