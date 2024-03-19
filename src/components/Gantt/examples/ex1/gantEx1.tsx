import React, {useRef, useState} from 'react';
import {Button, DropDownButton, Gantt, ScrollView} from "devextreme-react";

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
                    console.log('e', e.element)
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
                    }
                }
            >

                <Column dataField="title" caption="Наименование" width={300} />
                <Column dataField="start" caption="Начало" />
                <Column dataField="end" caption="Конец" />
                <Toolbar>
                    <Item options={{
                        hint: "Показать на диаграмме",
                        icon: 'rowfield',
                        onClick: async (e: any) => {
                            const gantInstance = gantRef.current?.instance;
                            await ShowTaskHelper.ShowTaskOnDiagram(currentTaskRef.current, gantInstance);
                        },
                    }} />
                  <Item widget={'dxDropDownButton'}>
                    <DropDownButton text={'Кнопка'} />
                  </Item>
                </Toolbar>
                <Tasks dataSource={tasks} />
                <Dependencies dataSource={dependencies} />
            </Gantt>

        </>
    );
}

