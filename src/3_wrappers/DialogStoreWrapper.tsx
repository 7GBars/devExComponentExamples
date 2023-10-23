import React, {createContext, PropsWithChildren, useContext} from 'react';
import {DialogsStore} from "../0_State/DialogsStore";

const StoreContext = createContext<DialogsStore | undefined>(undefined);
export const useStore = () => useContext(StoreContext);

type TStoreWrapper = PropsWithChildren<{name: string}>;
export function DialogStoreWrapper(props: TStoreWrapper) {
  const dialogsStore = new DialogsStore();
  return (
    <StoreContext.Provider value={dialogsStore}>
      {props.children}
    </StoreContext.Provider>

  );
}

