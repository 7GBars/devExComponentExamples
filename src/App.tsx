import React, {useRef} from 'react';
import {DialogStoreWrapper} from "./3_wrappers/DialogStoreWrapper";
import {TreeViewTest} from "./components/TreeView/TreeView";

import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";
import {DevExPopup} from "./components/Popup/DevExPopup";
import {SimpleGrid} from "./components/Grid/SimpleGrid";
import GridWithCustomDataSource from "./components/Grid/GridWithCustomDataSource";





import DataGrid from "devextreme/ui/data_grid";
import {TreeList} from "devextreme-react";
import {TreeListExample} from "./components";
import Validation from "./units/validation/validation";

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
      <DialogStoreWrapper name={'dialogs'}>
        <Validation/>
      </DialogStoreWrapper>
    </div>
  );
}

export default App;
