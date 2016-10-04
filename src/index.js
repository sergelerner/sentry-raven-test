import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import App from './App';
import './index.css';

Raven
  .config('https://819e0d4d48d14194ac38a29ca72488e1@sentry.io/102888')
  .install();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
