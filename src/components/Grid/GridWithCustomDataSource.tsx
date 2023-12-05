import React from 'react';
import {DataGrid} from "devextreme-react/data-grid";

import {generateData} from "./data/generateData";
import {customStore} from "./stores/customStore";

import s from './styles/grid.module.scss';

function GridWithCustomDataSource(props: any) {

  const localDataSource = generateData(100);
  return (
    <div className={s['grid--remote-operation']}>
      <DataGrid
        height={'100%'}
        keyExpr={'id'}
        dataSource={customStore}
        scrolling={{mode: 'virtual'}}
        paging={{enabled: true}}
        pager={{visible: true}}
        remoteOperations={true}
        stateStoring={{enabled: true}}
      />
    </div>
  );
}

export default GridWithCustomDataSource;