import React, {Dispatch, PropsWithChildren, SetStateAction, useRef, useState} from 'react';
import {DropDownBox, List} from "devextreme-react";
import CustomStore from "devextreme/data/custom_store";

export type TCommonProps = {dropDownBoxRef?:  React.RefObject<DropDownBox>}
export type TDataGridEmbeddedProps = {
    selectedBoxValue: Array<number> | undefined;
    setSelectedBoxValue:  Dispatch<SetStateAction<Array<number> | undefined>>;
    dataSource: any;
} & TCommonProps;

type TDropDownBoxOwnProps<T> = {
    data: T;
};

type TDropDownBoxProps<T> = PropsWithChildren<TDropDownBoxOwnProps<T>>;
type TChildrenType =TDataGridEmbeddedProps;

export function DropDownBoxTest<T extends TChildrenType>(props:  TDropDownBoxProps<T>) {

    const dropDownBoxRef = useRef<DropDownBox>(null);


    const displayExpr = (item: any) => {
        return item.CompanyName
    }

    const embeddedComponentTemplate = () => {
        if (React.isValidElement(props.children)) {
            return React.cloneElement(
                props.children as React.ReactElement<T>,
                {...props.data, dropDownBoxRef}
            );
        }
        return props.children;
    }
    return (
        <div className={'drop-down-box-wrapper'}>
            <DropDownBox
                ref={dropDownBoxRef}
                dataSource={props.data.dataSource}
                value={props.data.selectedBoxValue}
                onValueChanged={(e) => {
                    e.value === null && props.data.setSelectedBoxValue(e.value);
                }}

                displayExpr={displayExpr}
                contentRender={embeddedComponentTemplate}
                showClearButton
            />
        </div>
    );
}

