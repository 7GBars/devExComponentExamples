import React, {useRef} from 'react';
import {Column, DataGrid} from 'devextreme-react/data-grid';
import {ToolbarItem} from "devextreme/ui/data_grid";

import {dataSource} from "./data/data";

import RejectIcon from '../../0_assets/icons/icons8-reject.svg';
import AcceptIcon from '../../0_assets/icons/icons8-accept.svg';


const toolBarCommands = [
  {
    location: 'after',
    widget: 'dxButton',
    options: {
      icon: RejectIcon,
      disabled: false,
      onClick: (e: any) => console.log('test'),
      hint: 'Отменить'
    }
  },
  {
    location: 'after',
    widget: 'dxButton',
    options: {
      icon: AcceptIcon,
      disabled: false,
      onClick: (e: any) => console.log('test')
    }
  },

] as ToolbarItem[];

export function GridCustomToolbar() {
  const dataGridRef = useRef<DataGrid>(null);


  return (
    <div>
      <DataGrid
        id="dataGrid"
        ref={dataGridRef}
        dataSource={dataSource}
        keyExpr={'id'}
        toolbar={{visible: true, items: toolBarCommands}}
      >
        <Column dataField={'name'}/>
      </DataGrid>
    </div>
  );
}

