import React, {useRef} from 'react';
import {
  Column,
  DataGrid, Item, Toolbar
} from 'devextreme-react/data-grid';
import {dataSource} from "../data/data";

import './styles.scss';


export const ToolBarOverFlowMenu = () => {
  const toolBarItems = [
    {widget: 'dxButton', options: {icon: 'add', text: 'Добавить'}, location: 'before', locateInMenu: 'auto'},
    {widget: 'dxButton', options: {icon: 'remove', text: 'Удалить'}, location: 'before', locateInMenu: 'auto'},
    {widget: 'dxButton', options: {icon: 'copy', text: 'Копировать данные'}, location: 'before', locateInMenu: 'auto', showText: 'inMenu'},
    {widget: 'dxButton', options: {icon: 'message', text: 'Сообщения'}, location: 'after', locateInMenu: 'auto', showText: 'inMenu'},
    {widget: 'dxButton', options: {icon: 'like', text: 'Лайки'}, location: 'after', locateInMenu: 'auto', showText: 'inMenu'},
    {widget: 'dxButton', options: {icon: 'menu'}, location: 'after', locateInMenu: 'auto'}
  ];
const dataGridRef = useRef<DataGrid>(null);

  return (
    <div className={'container--ToolBarOverFlowMenu'}>
      <DataGrid
        id={'gridContainer'}
        ref={dataGridRef}
        dataSource={dataSource}
        keyExpr={'id'}
        columnChooser={{enabled: true}}
      >
        <Toolbar visible items={toolBarItems}/>

        <Column dataField={'name'}/>
        <Column dataField={'age'} />
      </DataGrid>
    </div>
  );
}

