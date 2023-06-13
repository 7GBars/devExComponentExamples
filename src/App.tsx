import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";

import {GridSorting} from "./components/Grid/GridSorting";
import {GridWithVirtualScroll} from "./components/Grid/GridWithVirtualScroll";
import {Testing} from "./components/HTMLEditor/Testing";
import {SimpleGrid} from "./components/Grid/SimpleGrid";








function App() {
  return (
    <div className="App">
     <SimpleGrid/>
    </div>
  );
}

export default App;
