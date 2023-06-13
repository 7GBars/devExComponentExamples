import React from 'react';
import {
  Column,
  DataGrid
} from 'devextreme-react/data-grid';
import {dataSource} from "./data/data";

export function SimpleGrid() {
  return (
    <div>
      <DataGrid
        id="dataGrid"
        dataSource={dataSource}
        keyExpr={'id'}
      >
        <Column dataField={'name'}/>
      </DataGrid>
    </div>
  );
}

