import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import {setButtonDefaultOptions} from "./components/_defaultComponentOptions";
import App from './App';


import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";
import 'react-reflex/styles.css';

import './index.css';
import {MainLayoutWrapper} from "./HOCs/MainLayoutWrapper";


setButtonDefaultOptions()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MainLayoutWrapper displayName={'AppWrapper'}>
    <App />
  </MainLayoutWrapper>
);


reportWebVitals();
