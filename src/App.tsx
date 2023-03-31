import React, {ReactNode} from 'react';

import {Grid} from "./components/Grid/Grid";
import {GantEx1} from "./components/Gantt/examples/ex1/gantEx1";
import {GantEx2} from "./components/Gantt/examples/ex2/gantEx2";

import {ToastContainer} from "react-toastify";


import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";






function App() {



  return (
    <div className="App">
      <GantEx2/>
    </div>
  );
}

export default App;
