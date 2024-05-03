import React, {useRef} from 'react';
import DataGrid from "devextreme/ui/data_grid";
import {Button} from "devextreme-react/button";

import './App.css';
import {Grid} from "./components/Grid/Grid";

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

      <Grid/>


    </div>
  );
}

export default App;
