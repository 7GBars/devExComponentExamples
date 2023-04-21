import React, {useState} from 'react';
import {DropDownBoxTest, TDataGridEmbeddedProps} from "../components/DropDownBox/DropDownBoxTest";
import {DataGridEmbedded} from "../components/DropDownBox/embedded component/DataGridEmbedded";
import {getCustomSource__loadMode_row} from "../1_dataSources/customStores/custom--loadMode-raw";

export function SimpleWrapperComponent(props: any) {
    const dataSource = getCustomSource__loadMode_row('customers.json');
    const [selectedBoxValue, setSelectedBoxValue] = useState<Array<number> | undefined>(undefined);
    return (
        <div>
            <DropDownBoxTest<TDataGridEmbeddedProps>
                data={{dataSource, selectedBoxValue, setSelectedBoxValue }}
            >
                <DataGridEmbedded />
            </DropDownBoxTest>
        </div>
    );
}

