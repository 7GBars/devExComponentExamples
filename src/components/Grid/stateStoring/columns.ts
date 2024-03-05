import {Column} from "devextreme/ui/data_grid";
import {RowObjectDataType} from "../data/data";

export const columnsInfo: Column<RowObjectDataType, string>[] = [
  {dataField: 'id', caption: 'Id'},
  {dataField: 'name', caption: 'Имя'},
  {dataField: 'age', caption: 'Возраст'},
  {dataField: 'gender', caption: 'Пол'},
  {dataField: 'isAdmin', caption: 'Права администротара'},
]