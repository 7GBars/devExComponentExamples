import React, {PropsWithChildren} from 'react';
import {HtmlEditor} from "devextreme-react";
import {htmlEditorTools} from "./HTMLEditorTools";

import './HTMLEditor.scss';

type THTMLEditorOwnProps = {componentName?: string}
type THTMLEditorProps = PropsWithChildren<THTMLEditorOwnProps>;

export function MyHtmlEditor(props: THTMLEditorProps) {
  const htmlEditorInitialized = function (e: any) {
    const toolbar = e.component.get("modules/toolbar");
    class extendedToolbar extends toolbar {
      get toolbarConfig() {
        console.log('сработал ли? get toolbarConfig');
        return {
          dataSource: this._prepareToolbarItems(),
          // disabled: this.isInteractionDisabled,
          // menuContainer: ".container",
          // multiline: this.isMultilineMode()
        };
      }
    }
    e.component.register({ "modules/toolbar": extendedToolbar });
  };
  return (
    <>
      <HtmlEditor
        onInitialized={htmlEditorInitialized}
        width={'100%'}
        height={'100%'}
      >
        {htmlEditorTools()}
      </HtmlEditor>
    </>
  );
}

