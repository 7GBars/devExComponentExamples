import React, {PropsWithChildren} from 'react';
import TabPanel, {Item} from "devextreme-react/tab-panel";

type TTabPanelOwnProps = {
  tabs: Array<{title: string; text: string}>;
  components?: any;
};
type TTabPanelProps = PropsWithChildren<TTabPanelOwnProps>;

export function TabPanelWithChildren(props: TTabPanelProps) {
  return (

      <TabPanel height={'100%'}>
        {props.tabs.map((item) => (
          <Item key={item.title} title={item.title}>
            {item.title === 'Tab 1' && props.children}
          </Item>
        ))}
      </TabPanel>

  );
}

