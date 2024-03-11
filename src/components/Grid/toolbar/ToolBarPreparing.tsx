import React, {useRef} from 'react';
import {
  Column,
  DataGrid, IItemProps, Item, Toolbar
} from 'devextreme-react/data-grid';
import {dataSource} from "../data/data";
import {Button} from "devextreme-react/button";

const renderListItem = (itemData: any) => {
  return <p>{itemData.itemProperty}</p>;
}
export function ToolBarPreparing() {
  const dataGridRef = useRef<DataGrid>(null);
  return (
    <div>
      <DataGrid
        id="dataGrid"
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
      <Button
        text={'click me'}
        onClick={(e) => {
          const gridInstance = dataGridRef.current?.instance;
          gridInstance?.option('editing.allowAdding', true);
          const toolbarItems = gridInstance?.option('toolbar.items') as IItemProps[];
          if (toolbarItems) {
            toolbarItems.push({name: 'addRowButton'});
            gridInstance?.option('toolbar.items', toolbarItems)
          } else {
            gridInstance?.option('toolbar.items', [{name: 'addRowButton'}])
          }
        }}
      />
    </div>
  );
}

