import React, {useRef} from 'react';
import {DialogStoreWrapper} from "./3_wrappers/DialogStoreWrapper";
import {DevExSelectBox} from "./components";
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";





function App() {
  const tabRef = useRef();
  return (
    <div className="App">
      <DialogStoreWrapper name={'dialogs'}>
        <DevExSelectBox/>
      </DialogStoreWrapper>
    </div>
  );
}

export default App;
