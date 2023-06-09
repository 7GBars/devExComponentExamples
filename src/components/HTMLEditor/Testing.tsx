import React from 'react';
import {TabPanelWithChildren} from "../TabPanel/TabPanelWithChildrens";
import {TestProps} from "../../commonTypes/propsTypes";

import './testing.scss';
import {MyHtmlEditor} from "./HTMLEditor/HTMLEditor";


const tabItems = [
  { title: 'Tab 1', text: 'Content 1' },
  { title: 'Tab 2', text: 'Content 2' },
  { title: 'Tab 3', text: 'Content 3' },
];
export function Testing(props:  TestProps) {

    return (
        <div className={'container'}>
            <div className={'container__item--1'}>Some Info</div>
            <div className={'container__item--2'}>
              <TabPanelWithChildren tabs={tabItems}>
                <div>просто для вида</div>
                <MyHtmlEditor/>
              </TabPanelWithChildren>
            </div>
        </div>
    );
}

