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
        height={'80vh'}
        width={'80vw'}
        showBorders

        keyExpr={'id'}
        dataSource={customStore}

        scrolling={{mode: 'virtual'}}
        paging={{pageSize: 100, enabled: true}}
        pager={{visible: true, showPageSizeSelector: true}}
        remoteOperations={true}
        stateStoring={{enabled: true}}
        filterRow={{visible: true}}
      />
    </div>
  );
}

export default GridWithCustomDataSource;