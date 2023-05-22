import React, {useRef} from 'react';
import DataGrid, {Scrolling, Paging, Pager} from "devextreme-react/data-grid";

import {AspNetDataSource} from "../../1_stores/AspnNetDataStore/AspNetStore";
import {TCommonProps} from "../../2_commonTypes/componentCommonTypes";
import {Button} from "devextreme-react/button";
import {ClickEvent} from "devextreme/ui/button";
import * as AspNetData from "devextreme-aspnet-data-nojquery";



export function GridWithVirtualScroll(props: TCommonProps) {
    const dataGridInstance = useRef<DataGrid>(null);
    const scrollToBottom = (e:  ClickEvent) => {

        if (dataGridInstance.current && dataGridInstance.current.instance) {

            const scrollableInstance = dataGridInstance.current.instance.getScrollable();
            console.log(scrollableInstance.scrollHeight)
            scrollableInstance.scrollTo({ top: scrollableInstance.scrollHeight() });
        }
    }
    const scrollToTop = (e:  ClickEvent) => {

        if (dataGridInstance.current && dataGridInstance.current.instance) {
            console.log('scroll top')
            const scrollableInstance = dataGridInstance.current.instance.getScrollable();
            // scrollableInstance.scrollTop()
            scrollableInstance.scrollTo(95200)
        }
    }


    return (
        <div>
            <Button text={'scroll to'} onClick={scrollToBottom}/>
            <Button text={'scroll to top'} onClick={scrollToTop}/>
            <DataGrid
                ref={dataGridInstance}
                onContentReady={(e) => {
                    const scrollableInstance = e.component.getScrollable();
                    scrollableInstance.scrollTo({ top: scrollableInstance.scrollHeight() });
                }}
                dataSource={AspNetDataSource}
                height={440}
                showBorders={true}
                remoteOperations={true}
                wordWrapEnabled={true}
            >
                <Scrolling mode="virtual" />
                <Paging
                    defaultPageSize={100}
                />
                <Pager
                    visible={true}
                    showPageSizeSelector

                />
            </DataGrid>
        </div>
    );
}

