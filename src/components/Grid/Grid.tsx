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


export const Grid = (props: TGridProps) =>  {
    const gridRef = useRef(null);
        return (<>
                <DataGrid
                    ref={gridRef}
                    height={440}
                    dataSource={dataSource}
                    showBorders={true}
                    remoteOperations={true}
                    wordWrapEnabled={false}
                >
                    <Scrolling mode="virtual" rowRenderingMode="virtual" />
                    <Paging defaultPageSize={100} />
                    <HeaderFilter visible={true} allowSearch={true} />

                    <Column dataField="Id" />
                    <Column dataField="StoreName" caption="Store" />
                    <Column dataField="ProductCategoryName" caption="Category" />
                    <Column dataField="ProductName" caption="Product" />
                    <Column dataField="DateKey" caption="Date" dataType="date" format="yyyy-MM-dd" />
                    <Column dataField="SalesAmount" caption="Amount" format="currency">
                        <HeaderFilter groupInterval={1000} />
                    </Column>
                </DataGrid>
        </>
        );
}


