import React, { useState } from 'react';
import Popup from 'devextreme-react/popup';
import Button from 'devextreme-react/button';

type DialogPropsType = {
  isOpen?: boolean;
  info?: string;
}
export const Dialog = ({isOpen = false}:  DialogPropsType) => {
  return (
    <>
      <Popup visible={isOpen}
             dragEnabled={true}>
        <div>
          <h3>My Popup</h3>
          <p>This is my popup content. You can put whatever you want in here!</p>
          <Button text="Close" />
        </div>
      </Popup>
    </>
  );
}

