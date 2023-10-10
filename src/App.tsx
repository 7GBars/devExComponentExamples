import React, {useRef} from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";
import {StoreWrapper} from "./3_wrappers/StoreWrapper";
import {DevExToolBar} from "./components";








function App() {
  const tabRef = useRef();
  return (
    <div className="App">
      <StoreWrapper name={'dialogs'}>
        <DevExToolBar/>
      </StoreWrapper>
    </div>
  );
}

export default App;
