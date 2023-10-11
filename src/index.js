import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StateContext } from 'Context/StateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rent_a_car">
      <StateContext>
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);
