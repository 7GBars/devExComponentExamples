import React from 'react';
import './gantEx2Styles.scss';

function getImagePath(taskId: any) {
    const imgPath = 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees';
    let img = taskId < 10 ? `0${taskId}` : taskId;
    img = `${imgPath}/${img}.png`;
    return img;
}

function getTaskColor(taskId: any) {
    const color = taskId % 6;
    return `custom-task-color-${color}`;
}

export default function TaskTemplate(task: any) {
    return (
        <div className={`custom-task ${getTaskColor(task.taskData.id)}`} style={ { width: `${task.taskSize.width}px` } }>
            <div className="custom-task-img-wrapper">
                <img className="custom-task-img" src={getImagePath(task.taskData.id)} />
            </div>
            <div className='custom-task-wrapper'>
                <div className='custom-task-title'>{task.taskData.title}</div>
                <div className='custom-task-row'>{task.taskResources[0].text}</div>
            </div>
            <div className='custom-task-progress' style={ { width: `${task.taskData.progress}%` } }></div>
        </div>
    );
}
