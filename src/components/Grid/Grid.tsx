import React, {ReactNode, useRef} from 'react';

import DataGrid, {
    Scrolling, Paging, Column, HeaderFilter, FilterRow, FilterPanel, FilterBuilderPopup, ColumnChooser,
} from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

import {on} from "devextreme/events";
import {Button} from "devextreme-react";

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
        return <Column dataField={c} caption={c + 'test'} cellRender={cellRenderTemplate}/>
    })
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
                onCellPrepared={(e) => {
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
        </>
    );
}


