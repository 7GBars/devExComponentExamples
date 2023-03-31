import React, {useRef, useState} from 'react';
import {Button, Gantt} from "devextreme-react";

import {gantTasks, gantTasks2, taskDependencies, taskDependencies2, TTaskType} from "../../stores/staticsDataStore";
import {toast, ToastContainer} from "react-toastify";
import {GanttScaleType} from "devextreme/ui/gantt";

import './gantDevExStyles.css';
import {ShowTaskHelper} from "./showTaskHelper";
type TGantDevExProps = {
    test?: boolean;
};


export function GantDevEx(props: TGantDevExProps) {
    const [currentTask, setCurrentTask] = useState<TTaskType>();
    const gantRef = useRef<Gantt>(null);
    console.log('render');
    return (
        <div className={'gant-component-container'}>
            <div className={'fixed-box'}>
                <Button text={'Select task'} onClick={(e) => {
                    const gantInstance = gantRef.current?.instance;
                    ShowTaskHelper.ShowTaskOnDiagram(currentTask, gantInstance);

                }}/>
            </div>

            <Gantt
                ref={gantRef}
                tasks={ {dataSource: gantTasks} }
                dependencies={{dataSource: taskDependencies}}
                columns={[
                    {
                        dataField: 'title',
                        caption: 'Задача',
                        width: 100,
                    }, {
                        dataField: 'start',
                        caption: 'Начало',
                        width: 100,
                    }, {
                        dataField: 'end',
                        caption: 'Конец',
                        width: 100,

                    }
                ]}

                scaleType={'auto'}

                editing={{enabled: true}}
                onTaskClick={(e) => {

                    setCurrentTask(e.data)
                }}
            />

            {/*<ToastContainer*/}
            {/*    position="top-right"*/}
            {/*    autoClose={5000}*/}
            {/*    hideProgressBar={false}*/}
            {/*    newestOnTop={false}*/}
            {/*    closeOnClick*/}
            {/*    rtl={false}*/}
            {/*    pauseOnFocusLoss*/}
            {/*    draggable*/}
            {/*    pauseOnHover*/}
            {/*    theme="light"*/}
            {/*/>*/}
            {/*/!* Same as *!/*/}
            {/*<ToastContainer />*/}
        </div>
    );
}

