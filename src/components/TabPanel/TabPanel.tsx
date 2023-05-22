import React, {useState, useEffect, useRef} from 'react';
import CheckBox from 'devextreme-react/check-box';
import TabPanel from 'devextreme-react/tab-panel';
import './TabPanel.css';
import {CompanyItem} from './data/CompanyItem'

export const multiViewItems = [{
    ID: 1,
    CompanyName: 'SuprMart websitesupermart.c',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    Zipcode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
    Website: 'http://www.nowebsitesupermart.com',
}, {
    ID: 2,
    CompanyName: "El'Depot 2455 Paces Ferry Road NW 2455 Paces Ferry Road NW",
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    Zipcode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
    Website: 'http://www.nowebsitedepot.com',
}];

export const TabPanelEx = (props: {tabPanelRef: any}) => {
    const [animationEnabled, setAnimationEnabled] = useState(true);
    const [swipeEnabled, setSwipeEnabled] = useState(true);
    const [loop, setLoop] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const itemTitleRender = (company: any) => {
        return <span>{company.CompanyName}</span>;
    };

    const onSelectionChanged = (args:  any) => {
        if (args.name === 'selectedIndex') {
            setSelectedIndex(args.value);
        }
    };

    const onLoopChanged = (args:  any) => {
        setLoop(args.value);
    };

    const onAnimationEnabledChanged = (args:  any) => {
        setAnimationEnabled(args.value);
    };

    const onSwipeEnabledChanged = (args:  any) => {
        setSwipeEnabled(args.value);
    };



    return (
        <div className="container">
            <TabPanel
                ref={props.tabPanelRef}
                showNavButtons={true}
                dataSource={multiViewItems}
                selectedIndex={selectedIndex}
                onOptionChanged={onSelectionChanged}
                loop={loop}
                itemTitleRender={itemTitleRender}
                itemComponent={CompanyItem}
                animationEnabled={animationEnabled}
                swipeEnabled={swipeEnabled}
            />
            <div className="item-box">
                Item <span>{ selectedIndex + 1 }</span> of <span>{ multiViewItems.length }</span>
            </div>
            <div className="options">
                <div className="caption">Options</div>
                <div className="option">
                    <CheckBox
                        value={loop}
                        onValueChanged={onLoopChanged}
                        text="Loop enabled"
                    />
                </div>
                <div className="option">
                    <CheckBox
                        value={ animationEnabled }
                        onValueChanged={onAnimationEnabledChanged}
                        text="Animation enabled"
                    />
                </div>
                <div className="option">
                    <CheckBox
                        value={ swipeEnabled }
                        onValueChanged={onSwipeEnabledChanged}
                        text="Swipe enabled"
                    />
                </div>
            </div>
        </div>
    );
};