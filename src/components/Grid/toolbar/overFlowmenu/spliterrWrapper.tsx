import React from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import {MainStoreWrapper} from "../../../../HOCs/MainStoreWrapper";
import {ToolBarOverFlowMenu} from "./ToolBarOverFlowMenu";

export function SplitterWrapper(props: any) {
  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement className="left-pane">
        <MainStoreWrapper>
          <ToolBarOverFlowMenu/>
        </MainStoreWrapper>
      </ReflexElement>
      <ReflexSplitter/>
      <ReflexElement className="right-pane">
        <MainStoreWrapper>
          <ToolBarOverFlowMenu/>
        </MainStoreWrapper>
      </ReflexElement>
    </ReflexContainer>
  )
}

