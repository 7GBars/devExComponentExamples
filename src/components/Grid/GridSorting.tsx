import {useState, useEffect, useRef} from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import {Button} from "devextreme-react/button";


interface Person {
    id: number;
    name: string;
    age: number;
    gender: string;
}

const dataSource: Person[] = [
    { id: 2, name: "Jane", age: 30, gender: "Female" },
    { id: 1, name: "John", age: 25, gender: "Male" },
    { id: 3, name: "Bob", age: 40, gender: "Male" }
];

interface SortOption {
    selector: keyof Person;
    desc: boolean;
}

export function GridSorting() {
    const gridRef = useRef<DataGrid>(null);
    return (
        <>
            <Button
                text={'my buttons'}
                icon={'add'}
                onClick={() => {
                    //@ts-ignore
                    const columnsIds = gridRef.current?.instance.getVisibleColumns();
                    console.log(columnsIds)
                    gridRef.current?.instance.columnOption('id', 'allowSorting', false);
                    gridRef.current?.instance.columnOption('name', 'allowSorting', false);
                }}
            />

            <DataGrid dataSource={dataSource} ref={gridRef} >
                <Column dataField="id" sortOrder={'desc'}/>
                <Column dataField="name" />
                <Column dataField="age" />
                <Column dataField="gender" />
            </DataGrid>
        </>
    );
}