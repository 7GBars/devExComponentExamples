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
                    showRowLines={false}
                    taskListWidth={500}
                    height={700}
                    scaleType="days"
                    taskContentRender={TaskTemplate}>
                    <Toolbar>
                        <Item name="undo" />
                        <Item name="redo" />
                        <Item name="separator" />
                        <Item name="collapseAll" />
                        <Item name="expandAll" />
                        <Item name="separator" />
                        <Item name="addTask" />
                        <Item name="deleteTask" />
                        <Item name="separator" />
                        <Item name="zoomIn" />
                        <Item name="zoomOut" />
                        <Item name="separator" />
                        <Item name="showResources" />
                        <Item name="showDependencies" />
                        <Item name="separator" />

                    </Toolbar>
                    <Tasks dataSource={tasks} />
                    <Dependencies dataSource={dependencies} />
                    <Resources dataSource={resources} />
                    <ResourceAssignments dataSource={resourceAssignments} />

                    <Column dataField="title" caption="Subject" width={300} allowResizing={false}/>
                    <Column dataField="start" caption="Start Date" allowResizing={false} />
                    <Column dataField="end" caption="End Date" allowResizing={false} />

                    <Editing enabled />
                </Gantt>
            </div>
        </div>
    );
}
