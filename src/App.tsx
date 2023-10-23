import React, {useRef} from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";
import {DialogStoreWrapper} from "./3_wrappers/DialogStoreWrapper";
import {DevExToolBar} from "./components";
import {TreeListExample} from "./components";
import {SimpleWrapperComponent} from "./wrappers";








function App() {
  const tabRef = useRef();
  return (
    <div className="App">
      <DialogStoreWrapper name={'dialogs'}>
        <SimpleWrapperComponent blockClassName={'catalogs'}/>
      </DialogStoreWrapper>
    </div>
  );
}

export default App;
