import uuid4 from "uuid4";
import {makeAutoObservable} from "mobx";
type TDialogPayload = {title: string; body: any};
type TDialogInfo = { isOpen: boolean; dialogPayload: TDialogPayload}
type TDialogs = {
  [key: string]: TDialogInfo
}
export class DialogsStore {
  public dialogs: TDialogs;
  public createDialogId() {
    return 'as';
  }
  constructor() {
    this.dialogs = {}
    makeAutoObservable(this);
  }
  public openDialog(dialogId: string) {
    this.dialogs && ( this.dialogs[dialogId].isOpen = true );
  }
  public closeDialog(dialogId: string) {
    this.dialogs && ( this.dialogs[dialogId].isOpen = false );
    delete this.dialogs[dialogId];
  }
}