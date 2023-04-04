import React, {ReactNode, useRef, useState} from 'react';

import DataGrid, {
    Scrolling, Paging, Column, HeaderFilter,
} from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

import { on } from "devextreme/events";

const dataSource = AspNetData.createStore({
    key: 'Id',
    loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
});


type TGridProps = {children?: ReactNode}

const columnsInfo = ['Id', 'StoreName', 'ProductCategoryName', 'ProductName', 'DateKey', 'SalesAmount'];

const cellRenderTemplate = (cellData: any) => {

    return <>{cellData.displayValue}</>
}

export const Grid = (props: TGridProps) =>  {

    const columnsJSX = columnsInfo.map((c) => {
            return <Column dataField={c} caption={c + 'test'} cellRender={cellRenderTemplate}/>
    })
    const gridRef = useRef(null);


        return (<>
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
                                console.log('test')
                            }
                        })
                    }}
                >
                    <Scrolling mode="virtual" rowRenderingMode="virtual" />
                    <Paging defaultPageSize={100} />
                    <HeaderFilter visible={true} allowSearch={true} />
                    {columnsJSX}
                </DataGrid>
        </>
        );
}


