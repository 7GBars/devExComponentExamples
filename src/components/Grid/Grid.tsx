import React, {ReactNode, useRef} from 'react';

import DataGrid, {
    Scrolling, Paging, Column, HeaderFilter,
} from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

const dataSource = AspNetData.createStore({
    key: 'Id',
    loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
});

type TGridProps = {children?: ReactNode}

const columnsInfo = ['Id', 'StoreName', 'ProductCategoryName', 'ProductName', 'DateKey', 'SalesAmount'];

export const Grid = (props: TGridProps) =>  {

    const columnsJSX = columnsInfo.map((c) => {
            return <Column dataField={c} caption={c + 'test'}/>
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
                >
                    <Scrolling mode="virtual" rowRenderingMode="virtual" />
                    <Paging defaultPageSize={100} />
                    <HeaderFilter visible={true} allowSearch={true} />
                    {columnsJSX}
                </DataGrid>
        </>
        );
}


