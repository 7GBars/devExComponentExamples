import React from 'react';
import {Column, DataGrid} from "devextreme-react/data-grid";

import {generateData} from "./data/generateData";
import {customStore} from "./stores/customStore";
import {columns} from "./columnsTemplates/columnsTemplate";

import  './styles/grid.scss';


function GridWithCustomDataSource(props: any) {

  const localDataSource = generateData(100);
  return (
    <div className={'grid--remote-operation'}>
      <DataGrid
        height={'100%'}
        width={'100%'}
        showBorders
        wordWrapEnabled={true}

        keyExpr={'id'}
        dataSource={customStore}

        scrolling={{mode: 'virtual'}}
        paging={{pageSize: 100}}
        pager={{visible: true, showPageSizeSelector: true}}
        remoteOperations={true}
        stateStoring={{enabled: true}}
        filterRow={{visible: true}}

      >
        {/*{columns.map((columnData, i) => {*/}
        {/*  return <Column*/}
        {/*    key={i}*/}
        {/*    {...columnData}*/}
        {/*    cssClass={columnData.cssClass}*/}

        {/*  />*/}
        {/*})}*/}
        <Column dataField={'id'} caption={'id'}/>
      </DataGrid>
    </div>
  );
}

export default GridWithCustomDataSource;