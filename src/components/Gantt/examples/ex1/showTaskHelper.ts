import dxGantt, {GanttScaleType} from "devextreme/ui/gantt";


import {toast} from "react-toastify";
import {TTaskType} from "./data";

type TScaleTypes = 'minutes' | 'hours' | 'sixHours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';

export class ShowTaskHelper {
    private static readonly DAY_LIMITERS = {
        DAY: 1,
        WEEK: 7,
        MONTH: 30,
        QUARTER: 91,
        YEAR: 360
    };
    public static ShowTaskOnDiagram(currentTask?: TTaskType, gantInstance?: dxGantt) {
       if (currentTask && gantInstance) {
           const scaleType = this.setScaleType(currentTask);
           gantInstance.option('scaleType', scaleType);
           gantInstance.scrollToDate(currentTask.start.getTime());
           console.log('change scale', scaleType)
       }
       else {
           toast.warn("Выберите задачу!", {
               position: toast.POSITION.TOP_RIGHT
           });
       }
    }

    private static setScaleType(currentTask: TTaskType): TScaleTypes {
        const taskStartDate = currentTask.start.getTime()
        const taskEndDate = currentTask.end.getTime();

        const diffTime = Math.abs(taskEndDate - taskStartDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let scaleType: GanttScaleType;

        switch (true) {
            case diffDays > this.DAY_LIMITERS.DAY && diffDays < this.DAY_LIMITERS.WEEK: {
                return scaleType = 'days';
                break;
            }
            case diffDays >= this.DAY_LIMITERS.WEEK && diffDays < this.DAY_LIMITERS.MONTH: {
                return scaleType = 'weeks';
                break;
            }
            case diffDays >= this.DAY_LIMITERS.MONTH && diffDays < this.DAY_LIMITERS.QUARTER: {
                return scaleType = 'months';
                break;
            }
            case diffDays >= this.DAY_LIMITERS.QUARTER && diffDays <= this.DAY_LIMITERS.YEAR: {
                return scaleType = 'quarters';
                break;
            }
            case diffDays > this.DAY_LIMITERS.YEAR: {
                return scaleType = 'years';
                break;
            }
            default: {
                return scaleType = 'hours';
            }
        }
    }
}