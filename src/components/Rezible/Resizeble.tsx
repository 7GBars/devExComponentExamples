import React, {useRef} from 'react';

import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import 'react-reflex/styles.css';
import {TabPanelEx} from "../TabPanel/TabPanel";
import TabPanel from "devextreme-react/tab-panel";


export function ReflexDemo() {
    const tabPanelRef = useRef<TabPanel>(null);
    return (
        <ReflexContainer orientation="vertical" style={{ height: '500px' }}>
            <ReflexElement className="left-pane" flex={0.5} onResize={(e) => {
                console.log('resize is called', tabPanelRef.current?.instance.repaint());
            }}>
                <TabPanelEx tabPanelRef={tabPanelRef} />
            </ReflexElement>
            <ReflexSplitter style={{ backgroundColor: 'gray' }} />
            <ReflexElement className="right-pane">
                <div className="pane-content">Right Pane (resizeable)</div>
            </ReflexElement>
        </ReflexContainer>
    );
}

