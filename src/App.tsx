import React, {useRef} from 'react';
import DataGrid from "devextreme/ui/data_grid";
import {Button} from "devextreme-react/button";

import './App.css';

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
      <Button text={'Тест'}/>
    </div>
  );
}

export default App;
