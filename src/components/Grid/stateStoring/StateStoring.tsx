import React, {useRef} from 'react';
import {
  Column,
  DataGrid, IItemProps, Item, Toolbar
} from 'devextreme-react/data-grid';

import {Button} from "devextreme-react/button";
import {dataSource} from "../data/data";

const renderListItem = (itemData: any) => {
  return <p>{itemData.itemProperty}</p>;
}
export function StateStoring() {
  const dataGridRef = useRef<DataGrid>(null);
  return (
    <div>
      <DataGrid
        id="stateStoring_test"
        ref={dataGridRef}
        dataSource={dataSource}
        keyExpr={'id'}
        toolbar={{visible: true}}
        onToolbarPreparing={(e) => {
          const toolbarItems = e.toolbarOptions.items;
          toolbarItems?.push({
            location: 'after',
            widget: 'dxButton',
            options: {
              icon: 'user',
              disabled: false,
              onClick: (e: any) => console.log('test')
            }
          })
        }}
      >
        <Column dataField={'name'}/>
      </DataGrid>
    </div>
  );
}

