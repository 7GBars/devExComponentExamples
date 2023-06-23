import uuid4 from "uuid4";
import {makeAutoObservable} from "mobx";
export type TDialogPayload = {title: string; body: any};
type TDialogInfo = { isOpen: boolean; dialogPayload: TDialogPayload}
type TDialogs = {
  [key: string]: TDialogInfo
}
export class DialogsStore {
  public dialogs: TDialogs;
  public static generateDialogKey() {
    return uuid4();
  }
  constructor() {
    this.dialogs = {}
    makeAutoObservable(this);
  }

  private _createDialog(dialogId: string, title: string, body: any) {
      this.dialogs = {...this.dialogs, [dialogId]: { isOpen: false, dialogPayload: {title, body}}}
  }
  public openDialog(dialogId: string, title: string, body: any) {
    this._createDialog(dialogId, title, body);
    this.dialogs[dialogId].isOpen = true;
  }
  public closeDialog(dialogId: string) {
    this.dialogs[dialogId].isOpen = false
    delete this.dialogs[dialogId];
  }
}