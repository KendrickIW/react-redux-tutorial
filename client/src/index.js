import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import MainApp from './App';
import store from './store';
import './index.css';

ReactDOM.render(<Provider store={store}><MainApp /></Provider>,
  document.getElementById('root'),
);
