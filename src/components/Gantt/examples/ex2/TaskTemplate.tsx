import React from 'react';
import './gantEx2Styles.scss';





export default function TaskTemplate(task: any) {
    return (
        <div className={`custom-task custom-task-color`} style={ { width: `${task.taskSize.width}px` } }>
            <div className='custom-task-wrapper'>
                <div className='custom-task-title'>{task.taskData.title}</div>
                <div className='custom-task-row'>{task.taskResources[0].text}</div>
            </div>
            <div className='custom-task-progress' style={ { width: `${task.taskData.progress}%` } }></div>
        </div>
    );
}
