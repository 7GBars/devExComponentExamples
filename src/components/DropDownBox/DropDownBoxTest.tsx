import React, {useCallback, useRef, useState} from 'react';
import {DropDownBox, List} from "devextreme-react";

const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

export function DropDownBoxTest(props: {}) {
    const [dataSource, setDataSource] = useState(fruits);
    const [selectedFruit, setSelectedFruit] = useState(undefined);

    const listRef = useRef<List>(null);
    const dropDownBoxRef = useRef<DropDownBox>(null);
    const onItemDeleting = useCallback((e: any) => {
        if (dataSource.length === 1) {
            e.cancel = true;
        }
    }, [dataSource]);

    const changeDropDownBoxValue = useCallback((arg: any) => {
        setSelectedFruit(arg.addedItems[0]);
        dropDownBoxRef.current?.instance.close();
    }, []);
    return (
        <div className={'drop-down-box-wrapper'}>
            <DropDownBox
                ref={dropDownBoxRef}
                dataSource={dataSource}
                value={selectedFruit}
                onValueChanged={(e) => {
                    console.log('onValue changed', e)
                }}
            >
                <List
                    ref={listRef}
                    selectionMode="single"
                    dataSource={dataSource}
                    allowItemDeleting={true}
                    onItemDeleting={onItemDeleting}
                    onSelectionChanged={changeDropDownBoxValue}
                />
            </DropDownBox>
        </div>
    );
}

