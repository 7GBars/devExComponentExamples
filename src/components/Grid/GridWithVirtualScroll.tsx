import React from 'react';
import DataGrid from "devextreme-react/data-grid";

import {AspNetDataSource} from "../../1_stores/AspnNetDataStore/AspNetStore";
import {TCommonProps} from "../../2_commonTypes/componentCommonTypes";



export function GridWithVirtualScroll(props: TCommonProps) {
    return (
        <div>
            <DataGrid
                dataSource={AspNetDataSource}
                height={440}
            />
        </div>
    );
}

