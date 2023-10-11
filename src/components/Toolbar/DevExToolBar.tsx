import React from 'react';
import {Toolbar} from "devextreme-react";
import {Item} from "devextreme-react/toolbar";
import Guid from "devextreme/core/guid";
import './DevExToolBar.scss';
import DexExButton from "../Button/DexExButton";
import {ClickEvent} from "devextreme/ui/button";



export function DevExToolBar(props: any) {
  const toolbarItemsInfo = [
    { text: 'Добавить',
      icon: 'add',
      onClick: (e: any) => {

      },
      id: new Guid()},
    { text: 'Удалить',
      icon: 'remove',
      onClick: (e: ClickEvent) => {
      const randomValue = Math.round(Math.random());
        e.component.option('icon', randomValue > 0 ? 'add' : 'remove' );
      },
      id: new Guid()},
    { text: 'Изменить',
      icon: 'edit',
      onClick: (e: any) => {
        console.log(e.component.option('icon'))
      },
      id: new Guid()
    }
  ] as const;


  return (
    <div>
      <Toolbar
        onContentReady={(e) => console.log('toolbar content ready')}
      >
        {toolbarItemsInfo.map(i => {
          return <Item
            key={i.id.toString()}
            widget="dxButton"
            render={(e) => <DexExButton {...e} {...i}/>}
          />
        })}
      </Toolbar>
    </div>
  );
}

