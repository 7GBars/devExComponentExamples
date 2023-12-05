import React from 'react';
import {DataGrid} from "devextreme-react/data-grid";

import {generateData} from "./data/generateData";
import {customStore} from "./stores/customStore";

function GridWithCustomDataSource(props: any) {
  const localDataSource = generateData(100);
  return (
    <>
      <DataGrid
        height={550}
        keyExpr={'id'}
        dataSource={customStore}
        scrolling={{mode: 'virtual'}}
        paging={{enabled: true}}
        pager={{visible: true}}
        remoteOperations={true}
      />
    </>
  );
}

export default GridWithCustomDataSource;