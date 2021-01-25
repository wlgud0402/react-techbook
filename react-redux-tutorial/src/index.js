import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { createStore } from 'redux';
// import * as serviceWorker from './serviceWorker';
// import rootReducer from './modules';

// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// serviceWorker.unregister();
reportWebVitals();
