import React, {ReactNode, useRef} from 'react';
import DOMPurify from 'dompurify';

import DataGrid, {
    Scrolling, Paging, Column, HeaderFilter, FilterRow, FilterPanel, FilterBuilderPopup, ColumnChooser } from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

import {on} from "devextreme/events";
import {Button} from "devextreme-react";
import {ColumnCellTemplateData} from "devextreme/ui/data_grid";
import {DxElement} from "devextreme/core/element";



const dataSource = AspNetData.createStore({
    key: 'Id',
    loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
});


type TGridProps = { children?: ReactNode }

const columnsInfo = ['Id', 'StoreName', 'ProductCategoryName', 'ProductName', 'DateKey', 'SalesAmount'];

const cellRenderTemplate = (cellData: any) => {

    return <>{cellData.displayValue}</>
}

export const Grid = (props: TGridProps) => {

    const filterBuilderPopupPosition = {
        of: window,
        at: "center",
        my: "center",
        // offset: { y: 20 }
    };

    const getGridInfo = () => {
        if (gridRef.current) {
           gridRef.current.instance.option({
               filterValue: [],
               width:'90%'
           });
        }
    };

    const gridRef = useRef<DataGrid>(null);
    const columnsJSX = columnsInfo.map((c) => {
        return <Column
          dataField={c}
          caption={c + 'test'}
          // cellRender={cellRenderTemplate}

        />
    });

    columnsJSX.push(<Column
      dataField={'custom-column'}
      caption={'CustomColumn'}
      calculateCellValue={(e: any) => {return '...загрузка'}}
    />)

    const cellTemplate = (cellElement: DxElement, cellInfo: ColumnCellTemplateData & {key: string}) => {
      console.log('cellInfo', cellInfo)
      cellElement.append('value')
    }
    const addValueToColumns = () => {
      setTimeout(() => {
        gridRef.current?.instance.columnOption('custom-column', 'cellTemplate', cellTemplate)
      }, 2000);
    }
    return (<>
            <Button text={'Get Info'} onClick={getGridInfo}/>
            <DataGrid
                ref={gridRef}
                height={440}
                dataSource={dataSource}
                showBorders={true}
                remoteOperations={true}
                wordWrapEnabled={false}
                allowColumnResizing
                cellHintEnabled
                onCellPrepared={(e: any) => {
                    on(e.cellElement, "mouseover", (arg: any) => {
                        if (e.cellElement.offsetWidth < e.cellElement.scrollWidth) {
                            e.cellElement.title = e.displayValue;
                        }
                    })
                }}
            >
                <FilterRow visible={true}/>
                <FilterPanel visible={true}/>
                <FilterBuilderPopup position={filterBuilderPopupPosition}/>
                <ColumnChooser enabled mode={'select'}/>

                <Scrolling mode="virtual" rowRenderingMode="virtual"/>
                <Paging defaultPageSize={100}/>
                <HeaderFilter visible={true} allowSearch={true}/>
                {columnsJSX}
            </DataGrid>
        <Button icon={'add'} onClick={(e) => addValueToColumns()}/>
        </>
    );
}




export function GridWithEncodeHTMLColumns() {
    const dataSource = [
        { id: 1, name: 'John', age: 25, htmlData:'<div>as</div>'},
        { id: 2, name: 'Jane', age: 30, htmlData:'<b>b</b>'}
    ];

    return (
        <DataGrid
            dataSource={dataSource}
            showBorders={true}
            columnAutoWidth={true}>
            <Column
                dataField="htmlData"
                caption="HTML"
                encodeHtml={true}
                // cellTemplate={(cellElement: any, cellInfo: any) => {
                //     const text = document.createTextNode(cellInfo.value);
                //     cellElement.appendChild(text); как текст
                // }}
                cellTemplate={(cellElement: any, cellInfo: any) => {
                    cellElement.innerHTML = DOMPurify.sanitize(cellInfo.value)
                    // как сюда DOMPurify.sanitize форматировано
                }}
            />
        </DataGrid>
    );
}