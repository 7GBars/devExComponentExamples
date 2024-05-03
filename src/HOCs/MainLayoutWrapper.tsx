import React, {FC, PropsWithChildren} from 'react';
import {Button} from "devextreme-react/button";

type TMainLayoutWrapperProps = PropsWithChildren<{
  displayName: string;
}>;

export const MainLayoutWrapper: FC<TMainLayoutWrapperProps> = ({children}) => {
  return (
    <div>
      <Button
        text={'Тест'}
        onClick={(e) => {

        }}
      />
      {children}
    </div>
  );
};

