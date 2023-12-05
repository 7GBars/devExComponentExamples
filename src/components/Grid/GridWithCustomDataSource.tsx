import React from 'react';
import {DataGrid} from "devextreme-react/data-grid";
import {linearCongruentialGenerator} from "../helpers/randomGenerator";
import {generateData} from "./data/generateData";

function GridWithCustomDataSource(props: any) {
  const localDataSource = generateData(10000);
  return (
    <>
      <DataGrid

      />
    </>
  );
}

export default GridWithCustomDataSource;