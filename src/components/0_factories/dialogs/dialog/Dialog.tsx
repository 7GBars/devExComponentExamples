import React, { useState } from 'react';
import Popup from 'devextreme-react/popup';
import Button from 'devextreme-react/button';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../../3_wrappers/StoreWrapper";
import {TDialogPayload} from "../../../../0_State/DialogsStore";


type DialogPropsType = {
  dialogKey: string;
  isOpen?: boolean;
  dialogInfo?: TDialogPayload;
}
export const Dialog = observer(({dialogInfo, ...props}:  DialogPropsType) => {
  const dialogStore = useStore();
  const onCloseHandler = () => {
    dialogStore?.closeDialog(props.dialogKey)
  }
  return (
    <>
      <Popup visible={props.isOpen}
             dragEnabled={true}>
        <div>
          <h3>{dialogInfo?.title ?? 'Без заголовка'}</h3>
          <p>{dialogInfo?.body}</p>
          <Button onClick={onCloseHandler} text="Close" />
        </div>
      </Popup>
    </>
  );
})

