import React from 'react';
import './gantEx2Styles.scss';





export default function TaskTemplate(task: any) {
    // if (task.taskData.id === 2) {
    //     console.log(task.taskData.id);
    //     setTimeout(() => {
    //         const taskElement  = document.getElementById(task.taskData.id)
    //         console.log(taskElement!.getBoundingClientRect().left);
    //         console.log(taskElement!.getBoundingClientRect().left);
    //     }, 0)
    //
    //
    // }

    return (
        <>

            <div id={task.taskData.id} className={`custom-task custom-task-color `} style={ { width: `${task.taskSize.width}px` } }>



                <div className='custom-task-wrapper'>
                    <div className='custom-task-title'>{task.taskData.title}</div>
                    <div className='custom-task-row'>`some text`</div>
                    {task.taskData.id === 1 && <div className={'test'}></div>}
                </div>
                {/*<div className='custom-task-progress' style={ { width: `${task.taskData.progress}%` } }></div>*/}
                <div>
                    as
                </div>
            </div>
        </>

    );
}
