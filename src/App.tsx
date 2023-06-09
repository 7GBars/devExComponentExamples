import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";

import {GridSorting} from "./components/Grid/GridSorting";
import {GridWithVirtualScroll} from "./components/Grid/GridWithVirtualScroll";
import {Testing} from "./components/HTMLEditor/Testing";








function App() {
  return (
    <div className="App">
      <Testing name={'tools hidden menu dropdownMenu test'}/>
    </div>
  );
}

export default App;
