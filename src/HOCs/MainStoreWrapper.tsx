import React, {createContext, FC, PropsWithChildren, ReactNode, useContext} from 'react';
import {MainStore} from "../0_State/mainStore";
interface IMainStoreContext {
  mainStore: MainStore;
}

const MainStoreContext = createContext<IMainStoreContext | undefined>(undefined);
export const useMainStore = () => {
  const context = useContext(MainStoreContext);

  if (context === undefined) {
    throw new Error('useMainStore must be used within a MainStoreWrapper');
  }

  return context;
}

export const MainStoreWrapper = ({ children }: PropsWithChildren<{}>) => {
  const mainStore = new MainStore();
  return (
    <MainStoreContext.Provider value={{ mainStore }}>
      {children}
    </MainStoreContext.Provider>
  );
};