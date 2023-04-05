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
    const currentTaskRef = useRef();
    const gantRef = useRef<Gantt>(null);
    return (
        <>


            <Gantt
                ref={gantRef}
                height={700}
                onTaskClick={(e) => {
                    currentTaskRef.current = e.data;
                    localStorage.setItem('currentTask', JSON.stringify(e.data))
                }}
                // taskTimeTooltipContentTemplate={(e) => {
                //     console.log('e')
                // }}


                onContentReady={(e) => {
                    const savedCurrentTask =  localStorage.getItem('currentTask');
                    const gantInstance = gantRef.current?.instance;
                    if (savedCurrentTask && gantInstance) {
                        setTimeout(() => {
                            ShowTaskHelper.ShowTaskOnDiagram(JSON.parse(savedCurrentTask), gantInstance);
                        }, 0)

                    }

                    // console.log('onContentReady')
                    // setTimeout(() => {
                    //     const gantInstance = gantRef.current!.instance;
                    //     //@ts-ignore
                    //     let a = gantInstance._ganttView._taskAreaContainer._scrollView;
                    //     // a.on('scroll', (e: any) => {
                    //     //     console.log(e.scrollOffset);
                    //     // })
                    //     a.scrollTo(JSON.parse(localStorage.getItem('scrollInfo')!))
                    //     // console.log('gantInstance._ganttTreeList', a);
                    // }, 100)

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
                            ShowTaskHelper.ShowTaskOnDiagram(currentTaskRef.current, gantInstance);
                        },
                    }} />
                </Toolbar>
                <Tasks dataSource={tasks} />
                <Dependencies dataSource={dependencies} />
            </Gantt>
            {/*<Button text={'getScrollView'} onClick={(e) => {*/}
            {/*    const gantInstance = gantRef.current!.instance;*/}
            {/*    //@ts-ignore*/}
            {/*    let a = gantInstance._ganttView._taskAreaContainer._scrollView;*/}
            {/*    a.on('scroll', (e: any) => {*/}
            {/*        console.log(e.scrollOffset);*/}
            {/*        localStorage.setItem('scrollInfo', JSON.stringify(e.scrollOffset))*/}
            {/*    })*/}
            {/*    console.log('gantInstance._ganttTreeList', a)*/}
            {/*}}/>*/}
        </>
    );
}

