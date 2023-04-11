import React, {useRef, useState} from 'react';
import {Button, Gantt, ScrollView} from "devextreme-react";

import {
    tasks, dependencies, resources, resourceAssignments, TTaskType,
} from './data';
import {ShowTaskHelper, TScaleTypes} from "./showTaskHelper";
import {Column, Dependencies, Item, ResourceAssignments, Resources, Tasks, Toolbar} from "devextreme-react/gantt";


import './gantDevExStyles.css';

type TGantDevExProps = {
    test?: boolean;
};


export function GantEx1(props: TGantDevExProps) {
    const currentTaskRef = useRef();
    const gantRef = useRef<Gantt>(null);
    const gantScrollViewRef = useRef<ScrollView>();
    const scaleScanner = (e: any) => {
        console.log('scaleScanner')
        let scaleElement = e.scaleElement as any;
        if(e.scaleIndex === 0) {
            localStorage.setItem('scaleType', e.scaleType);
            localStorage.setItem('scaleElementWidth',scaleElement.clientWidth);
            scaleElement.style.backgroundColor = "silver";
        }

        let border = e.separatorElement;
        border.style.borderColor = "steelBlue";
    }
    return (
        <>


            <Gantt
                ref={gantRef}
                height={700}
                onTaskClick={(e) => {
                    currentTaskRef.current = e.data;
                    localStorage.setItem('currentTask', JSON.stringify(e.data))
                }}



                onContentReady={(e) => {
                    // const savedCurrentTask =  JSON.parse(localStorage.getItem('currentTask') ?? '');
                    const gantInstance = gantRef.current?.instance;


                    const [scaleType, scrollInfo] = ShowTaskHelper.getInitData();


                    setTimeout(() => {


                        if(gantInstance) {
                            ShowTaskHelper.getScrollViewAndStartToSavePosition(gantInstance!);
                            ShowTaskHelper.SetScaleType(gantInstance, scaleType as any).then(() => {
                                ShowTaskHelper.GoToSavedScrollPosition(gantInstance);

                            })

                            gantInstance?.on('scaleCellPrepared', scaleScanner);
                        }
                    }, 0)
                    // if (savedCurrentTask && gantInstance) {
                    //     setTimeout(() => {
                    //         gantInstance.option('selectedRowKey', savedCurrentTask.id);
                    //         const ganttScrollView = ShowTaskHelper.GetGanttScrollViewInstance(gantInstance, gantScrollViewRef);
                    //         ganttScrollView.on('scroll', (e: any) => {
                    //             const positionInfo = e.scrollOffset as { top: number, left: number }
                    //             if (positionInfo.top == 0) return;
                    //             else {
                    //                 localStorage.setItem('scrollInfo', JSON.stringify(e.scrollOffset))
                    //             }
                    //         });
                    //
                    //
                    //         // ShowTaskHelper.ShowTaskOnDiagram(savedCurrentTask, gantInstance).then(() => {
                    //         //     let savedScrollPosition = JSON.parse(localStorage.getItem('scrollInfo') ?? '')
                    //         //     if (savedScrollPosition) {
                    //         //         ganttScrollView.scrollTo(savedScrollPosition);
                    //         //     }
                    //         // })
                    //     }, 0);
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

                }
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
                            await ShowTaskHelper.ShowTaskOnDiagram(currentTaskRef.current, gantInstance);
                        },
                    }} />
                </Toolbar>
                <Tasks dataSource={tasks} />
                <Dependencies dataSource={dependencies} />
            </Gantt>

        </>
    );
}

