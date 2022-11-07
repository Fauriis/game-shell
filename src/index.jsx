import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider} from 'react-redux';
import store from './store';
import App from './App';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <App></App>
    </ReduxProvider>
  </React.StrictMode>
);


