import React, {useCallback, useRef, useState} from 'react';
import {DropDownBox, List} from "devextreme-react";
import CustomStore from "devextreme/data/custom_store";
import DataGrid from "devextreme-react/data-grid";

const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
const getDataSource = (jsonFile: string) =>  {
    return new CustomStore({
        loadMode: 'raw',
        key: 'ID',
        load() {
            return fetch(`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/${jsonFile}`)
                .then((response) => response.json());
        },
    });
};
export function DropDownBoxTest(props: {}) {
    const dataSource = getDataSource('customers.json');
    const dropDownBoxRef = useRef<DropDownBox>(null);
    const [selectedBoxValue, setSelectedBoxValue] = useState(undefined);

    const gridBoxDisplayExpr = (item: any) => {
        return item.CompanyName
    }

    const dataGridOnSelectionChanged = (e: any) => {
        setSelectedBoxValue(e.selectedRowKeys);
        dropDownBoxRef.current?.instance.close()
    }
    return (
        <div className={'drop-down-box-wrapper'}>
            <DropDownBox
                ref={dropDownBoxRef}
                dataSource={dataSource}
                displayExpr={gridBoxDisplayExpr}
                value={selectedBoxValue}
                onValueChanged={(e) => {
                    console.log('onValue changed', e)
                }}

            />
        </div>
    );
}

