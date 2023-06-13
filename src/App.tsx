import React, {useRef} from 'react';
import './App.css';
import 'devextreme/dist/css/dx.light.css';
import 'devexpress-gantt/dist/dx-gantt.css';
import "react-toastify/dist/ReactToastify.css";

import {GridSorting} from "./components/Grid/GridSorting";
import {GridWithVirtualScroll} from "./components/Grid/GridWithVirtualScroll";
import {Testing} from "./components/HTMLEditor/Testing";
import {SimpleGrid} from "./components/Grid/SimpleGrid";
import {StoreWrapper} from "./3_wrappers/StoreWrapper";
import {TabPanelEx} from "./components/TabPanel/TabPanel";
import Dialogs from "./components/0_factories/dialogs/Dialogs";








function App() {
  const tabRef = useRef();
  return (
    <div className="App">
      <StoreWrapper name={'dialogs'}> //todo подумать как унифисицировать обертку store
         <TabPanelEx tabPanelRef={tabRef}/>
         <Dialogs/>
      </StoreWrapper>
    </div>
  );
}

export default App;
