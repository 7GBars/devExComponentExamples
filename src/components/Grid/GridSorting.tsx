import { useState, useEffect } from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';


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

    return (
        <DataGrid dataSource={dataSource} >
            <Column dataField="id" sortOrder={'desc'}/>
            <Column dataField="name" />
            <Column dataField="age" />
            <Column dataField="gender" />
        </DataGrid>
    );
}