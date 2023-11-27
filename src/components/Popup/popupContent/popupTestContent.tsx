import React, {LegacyRef, ReactElement, useEffect, useRef} from 'react';

import './popupTestContent.scss';
import {ScrollView} from "devextreme-react/scroll-view";

function PopupTestContent(props: any) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div className={'main-container'} ref={divRef}  onWheel={handleWheel}>

        <div className={'element'}>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
        <div className={'element'}>Lorem ipsum dolor.</div>
        <div className={'element--big-height'}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aut enim fugit libero nobis porro quaerat quia ratione. Aliquid error
            fuga odio quas sunt! Accusamus asperiores ducimus numquam vel? Facilis, saepe.</div>
          <div> test</div>
          <div className={'child-container'}>
              <div className="overflow-container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consequatur dolorem est explicabo facilis maxime mollitia,
                nesciunt omnis quas quasi quia quisquam reiciendis sapiente sed,
                similique tenetur veniam. Animi, obcaecati.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consequatur dolorem est explicabo facilis maxime mollitia,
                nesciunt omnis quas quasi quia quisquam reiciendis sapiente sed,
                similique tenetur veniam. Animi, obcaecati.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consequatur dolorem est explicabo facilis maxime mollitia,
                nesciunt omnis quas quasi quia quisquam reiciendis sapiente sed,
                similique tenetur veniam. Animi, obcaecati.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consequatur dolorem est explicabo facilis maxime mollitia,
                nesciunt omnis quas quasi quia quisquam reiciendis sapiente sed,
                similique tenetur veniam. Animi, obcaecati.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda consequatur dolorem est explicabo facilis maxime mollitia,
                nesciunt omnis quas quasi quia quisquam reiciendis sapiente sed,
                similique tenetur veniam. Animi, obcaecati.
              </div>
          </div>
        </div>
    </div>
  );
}

export default PopupTestContent;