import React from 'react';
import {Toolbar} from "devextreme-react";
import {Item} from "devextreme-react/toolbar";
import Guid from "devextreme/core/guid";
import './DevExToolBar.scss';
import DexExButton from "../Button/DexExButton";

const toolbarItemsInfo = [
  {text: 'Добавить', icon: 'add', onClick: (e: any) => console.log(e.component.option('icon')), id: new Guid()},
  {text: 'Удалить', icon: 'remove', onClick: (e: any) => console.log(e.component.option('icon')), id: new Guid()},
  {text: 'Изменить', icon: 'edit', onClick: (e: any) => console.log(e.component.option('icon')), id: new Guid()}
] as const;

export function DevExToolBar(props: any) {
  return (
    <div>
      <Toolbar onContentReady={(e) => console.log('toolbar content ready')}>
        {toolbarItemsInfo.map(i => {
          return <Item key={i.id.toString()} widget="dxButton" render={(e) => <DexExButton {...e} {...i}/>}/>
        })}
      </Toolbar>
    </div>
  );
}

