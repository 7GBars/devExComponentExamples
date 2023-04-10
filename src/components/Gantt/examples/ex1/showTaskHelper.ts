import {MutableRefObject} from "react";
import dxGantt, {GanttScaleType} from "devextreme/ui/gantt";
import {IScrollViewOptions, ScrollView} from "devextreme-react/scroll-view";
import {toast} from "react-toastify";

import {TTaskType} from "./data";

export type TScaleTypes = 'minutes' | 'hours' | 'sixHours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';

export class ShowTaskHelper {
    private static readonly DAY_LIMITERS = {
        DAY: 1,
        WEEK: 7,
        MONTH: 30,
        QUARTER: 91,
        YEAR: 360
    };
    public static async ShowTaskOnDiagram(currentTask?: TTaskType, gantInstance?: dxGantt) {
       if (currentTask && gantInstance) {
           const taskInfo = this.getSavedSelectedTaskInfo(currentTask);
           const scaleType = this.setScaleType(taskInfo);
           gantInstance.option('scaleType', scaleType);
           gantInstance.scrollToDate(taskInfo.start.getTime());
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

    public static getSavedSelectedTaskInfo(taskInfo: TTaskType):  TTaskType {
        if( taskInfo ) {
            /* из localStorage Date приходит  стрингой */
            taskInfo.start = new Date(taskInfo.start as unknown as string);
            taskInfo.end = new Date(taskInfo.end as unknown as string);
        }
        return taskInfo;
    }

    public static GetGanttScrollViewInstance(gantInstance: dxGantt) {
        //@ts-ignore
        return  gantInstance._ganttView._taskAreaContainer._scrollView;
        // return gantScrollViewRef.current = scrollView;
    }

    public static getScrollViewAndStartToSavePosition(gantInstance: dxGantt) {
            setTimeout(() => {
                const scrollView = this.GetGanttScrollViewInstance(gantInstance)
                scrollView.on('scroll', (e: any) => {
                    const positionInfo = e.scrollOffset as { top: number, left: number }
                    console.log(e.scrollOffset)
                    if (positionInfo.top == 0) return;
                    else {
                        localStorage.setItem('scrollInfo', JSON.stringify(e.scrollOffset))
                    }
                });
            }, 1000)
    }

    public static getInitData() {
        const scaleType = localStorage.getItem('scaleType');
        const scrollInfo = localStorage.getItem('scrollInfo');
        return [scaleType , scrollInfo]
    }
    public static async SetScaleType(ganttInstance: dxGantt | undefined,  scaleType: TScaleTypes | undefined) {
        ganttInstance && ganttInstance?.option('scaleType',  scaleType ?? 'auto');
    }
    public static async GoToSavedScrollPosition(gantInstance: dxGantt) {
        const scrollViewInstance = this.GetGanttScrollViewInstance(gantInstance);
        const savedPosition = localStorage.getItem('scrollInfo');
        const saved = JSON.parse(savedPosition ?? '')
        console.log(saved)
        scrollViewInstance && scrollViewInstance.scrollTo(saved);
    }
}