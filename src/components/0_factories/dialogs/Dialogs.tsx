import React from 'react';
import {Dialog} from "./dialog/Dialog";
type TDialogsProps = {name?: string}

function Dialogs(props: TDialogsProps) {
  const dialogs: Array<any> = [];
  
  return <>
    { dialogs.map(d => <Dialog />)}
  </>


}

export default Dialogs;