import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";

import {GridSorting} from "./components/Grid/GridSorting";
import {GridWithVirtualScroll} from "./components/Grid/GridWithVirtualScroll";








function App() {
  return (
    <div className="App">
      <GridWithVirtualScroll name={'scroll test'}/>
    </div>
  );
}

export default App;
