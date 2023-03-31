import React from 'react';

import {Grid} from "./components/Grid/Grid";
import {GantDevEx} from "./components/Gantt/GantDevEx";
import {ToastContainer} from "react-toastify";

import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";





function App() {
  return (
    <div className="App">
      {/*<Grid />*/}
      <GantDevEx test={false}/>
        <ToastContainer limit={3}/>
    </div>
  );
}

export default App;
