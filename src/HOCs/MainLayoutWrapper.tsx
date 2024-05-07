import React, {FC, PropsWithChildren} from 'react';

import DevextremeUiThemes from "devextreme/ui/themes";

import ToggleSwitch from "../components/myComponents/themeSwitcher/ThemeSwitcher";

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
  const currentTheme = DevextremeUiThemes.current();
  return (
    <div >
      <ToggleSwitch />
      {children}
    </div>
  );
};

