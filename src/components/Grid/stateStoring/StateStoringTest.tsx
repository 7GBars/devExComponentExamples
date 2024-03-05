import React, {useRef} from 'react';
import {
  Column,
  DataGrid,
} from 'devextreme-react/data-grid';
import {dataSource} from "../data/data";
import {StateStoring} from "devextreme/common/grids";
import {columnsInfo} from "./columns";

const stateStoringOptions: StateStoring = {
  type: 'localStorage',
  enabled: true,
  storageKey: 'GridViewSettings',
  savingTimeout: 10
}
export function StateStoringTest() {
  const dataGridRef = useRef<DataGrid>(null);

  const columns = columnsInfo.map(parameter => {
    const visible = parameter.dataField !== 'isAdmin';
    return <Column dataField={parameter.dataField} caption={parameter.caption} visible={visible}/>
  })
  return (
    <div>
      <DataGrid
        id="stateStoring_test"
        ref={dataGridRef}
        dataSource={dataSource}
        keyExpr={'id'}
        stateStoring={stateStoringOptions}
        selection={{mode: 'single'}}
        columnChooser={{enabled: true, mode: 'select'}}

        allowColumnResizing={true} // без этого свойства не работает сохранение размеров
      >
        {columns}
      </DataGrid>
    </div>
  );
}

