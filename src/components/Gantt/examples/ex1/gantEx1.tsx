import React, {useRef, useState} from 'react';
import {Button, Gantt} from "devextreme-react";

import {
    tasks, dependencies, resources, resourceAssignments, TTaskType,
} from './data';
import {ShowTaskHelper} from "./showTaskHelper";
import {Column, Dependencies, Item, ResourceAssignments, Resources, Tasks, Toolbar} from "devextreme-react/gantt";


import './gantDevExStyles.css';

type TGantDevExProps = {
    test?: boolean;
};


export function GantEx1(props: TGantDevExProps) {
    const [currentTask, setCurrentTask] = useState<TTaskType>();
    const gantRef = useRef<Gantt>(null);
    console.log('render');
    return (
        <>


            <Gantt
                ref={gantRef}
                scaleType={'auto'}
                taskListWidth={500}
                height={700}
                onTaskClick={(e) => {
                    setCurrentTask(e.data)
                }}
                taskTimeTooltipContentTemplate={(e) => {
                    console.log('e')
                }}
            >

                <Column dataField="title" caption="Subject" width={300} />
                <Column dataField="start" caption="Start Date" />
                <Column dataField="end" caption="End Date" />
                <Toolbar>
                    <Item options={{
                        hint: "Показать на диаграмме",
                        icon: 'rowfield',
                        onClick: async (e: any) => {
                            const gantInstance = gantRef.current?.instance;
                            ShowTaskHelper.ShowTaskOnDiagram(currentTask, gantInstance);
                        },
                    }} />
                </Toolbar>
                <Tasks dataSource={tasks} />
                <Dependencies dataSource={dependencies} />
                {/*<Resources dataSource={resources} />*/}
                {/*<ResourceAssignments dataSource={resourceAssignments} />*/}
            </Gantt>
        </>
    );
}

