import React, {Dispatch, SetStateAction} from 'react';
import DataGrid from "devextreme-react/data-grid";
import {DropDownBox} from "devextreme-react";
import {TDataGridEmbeddedProps} from "../DropDownBoxTest";


export function DataGridEmbedded(props: Partial<TDataGridEmbeddedProps>) {
    return (
        <>
            <DataGrid
                selectedRowKeys={props.selectedBoxValue}
                onSelectionChanged={(e) => {
                    const key = e.selectedRowKeys;
                    console.log('selection changed')
                    props.setSelectedBoxValue && props.setSelectedBoxValue(key);
                    props.dropDownBoxRef?.current?.instance.close()
                }}
                dataSource={props.dataSource}
                selection={{mode: 'single'}}
            />
        </>
    );
}
