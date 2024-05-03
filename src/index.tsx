import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import {setButtonDefaultOptions} from "./components/_defaultComponentOptions";
import App from './App';

import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";
import 'react-reflex/styles.css';

import './index.css';


setButtonDefaultOptions()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);


reportWebVitals();
