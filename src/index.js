import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

// React-router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
   </BrowserRouter>
  </React.StrictMode>
);


