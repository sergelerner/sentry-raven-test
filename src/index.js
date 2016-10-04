import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import App from './App';
import './index.css';
import _ from 'lodash';

Raven
  .config('https://819e0d4d48d14194ac38a29ca72488e1@sentry.io/102888')
  .install();

try {
  const dude = {};
  const isSinger = _.has(dude, ['talent', 'sing']);

  if (!isSinger) {
    throw new Error('Dude is not a singer');
  }

} catch(e) {
  Raven.captureException(e);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
