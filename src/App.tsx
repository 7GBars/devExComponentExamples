import React, {useRef} from 'react';

import './App.css';


import DataGrid from "devextreme/ui/data_grid";

import {GantEx1} from "./components/Gantt/examples/ex1/gantEx1";

DataGrid.defaultOptions({
  options: {
    scrolling: {
      legacyMode: true
    }
  }
});
function App() {
  const tabRef = useRef();
  return (
    <div className="App">
      <GantEx1/>
    </div>
  );
}

export default App;
