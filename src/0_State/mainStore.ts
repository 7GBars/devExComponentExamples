import dxDataGrid from "devextreme/ui/data_grid";

export class MainStore {
  private _componentInstance: dxDataGrid | null = null;
  get ComponentInstance() {
    return this._componentInstance;
  }
  setComponentInstance(instance: dxDataGrid) {
    this._componentInstance = instance;
  }
}