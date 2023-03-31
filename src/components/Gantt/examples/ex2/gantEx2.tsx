import React from 'react';
import Gantt, {
    Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing, Item, Toolbar,
} from 'devextreme-react/gantt';
import {
    tasks, dependencies, resources, resourceAssignments,
} from './data';

import TaskTemplate from './TaskTemplate';

export function GantEx2() {
    return (
        <div id="form-demo">
            <div className="widget-container">
                <Gantt

                    taskListWidth={200}
                    height={700}
                    scaleType="auto"
                    taskContentRender={TaskTemplate}>

                    <Tasks dataSource={tasks} />


                    <Column dataField="title" caption="Subject" width={300} allowResizing={false}/>
                    <Column dataField="start" caption="Start Date" allowResizing={false} />
                    <Column dataField="end" caption="End Date" allowResizing={false} />


                </Gantt>
            </div>
        </div>
    );
}
