import React, {FC, PropsWithChildren} from 'react';
import {Button} from "devextreme-react/button";
import DevextremeUiThemes from "devextreme/ui/themes";

type TMainLayoutWrapperProps = PropsWithChildren<{
  displayName: string;
}>;
const themes = {
  base: "generic.light",
  dark: "generic.dark"
};
const themeMap = {
  [themes.base]: themes.dark,
  [themes.dark]: themes.base
};
export const MainLayoutWrapper: FC<TMainLayoutWrapperProps> = ({children}) => {
  return (
    <div>
      <Button
        text={'Тест'}
        onClick={(e) => {
          const currentTheme = DevextremeUiThemes.current();
          DevextremeUiThemes.current(themeMap[currentTheme]);
        }}
      />

      {children}
    </div>
  );
};

