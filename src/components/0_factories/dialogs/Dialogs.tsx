import React from 'react';
import {Dialog} from "./dialog/Dialog";
import {useStore} from "../../../3_wrappers/DialogStoreWrapper";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

type TDialogsProps = { name?: string }

function Dialogs(props: TDialogsProps) {
  const dialogsStore = useStore();

  const dialogs = Object.entries(dialogsStore?.dialogs ?? {});


  return <>
    {dialogs.map(([dialogKey, dialogInfo]) => (
      <Dialog
        key={dialogKey}
        dialogKey={dialogKey}
        isOpen={dialogInfo.isOpen}
        dialogInfo={dialogInfo.dialogPayload}
      />
    ))}
  </>


}

export default observer(Dialogs);