import React, {ReactNode, useState} from 'react';
import {DropDownBoxTest, TDataGridEmbeddedProps} from "./components/DropDownBox/DropDownBoxTest";

import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";
import {DataGridEmbedded} from "./components/DropDownBox/embedded component/DataGridEmbedded";
import {getCustomSource__loadMode_row} from "./1_dataSources/customStores/custom--loadMode-raw";
import {SimpleWrapperComponent} from "./wrappers/SimplewrapperComponent";







function App() {
  return (
    <div className="App">
        <SimpleWrapperComponent/>
    </div>
  );
}

export default App;
