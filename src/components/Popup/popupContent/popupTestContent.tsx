import React from 'react';

import './popupTestContent.scss';
import {ScrollView} from "devextreme-react/scroll-view";

function PopupTestContent(props: any) {
  return (
    <div className={'main-container'}>
      <ScrollView>
        <div className={'element'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className={'element'}>Lorem ipsum dolor.</div>
        <div className={'element--big-height'}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aut enim fugit libero nobis porro quaerat quia ratione. Aliquid error
            fuga odio quas sunt! Accusamus asperiores ducimus numquam vel? Facilis, saepe.</div>
          <div> test</div>
        </div>
      </ScrollView>
    </div>
  );
}

export default PopupTestContent;