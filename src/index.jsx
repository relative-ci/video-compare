import React from 'react';
import ReactDOM from 'react-dom';

import 'url-search-params-polyfill';

import App from './App/App';
import './analytics';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
