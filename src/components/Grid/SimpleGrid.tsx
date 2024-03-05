import React, {useRef} from 'react';
import {
  Column,
  DataGrid
} from 'devextreme-react/data-grid';
import {dataSource} from "./data/data";


export function SimpleGrid() {
  const dataGridRef = useRef<DataGrid>(null);
  return (
    <div>
      <DataGrid
        id="dataGrid"
        ref={dataGridRef}
        dataSource={dataSource}
        keyExpr={'id'}
      >
        <Column dataField={'name'}/>
        <Column dataField={'age'} />
      </DataGrid>
    </div>
  );
}

