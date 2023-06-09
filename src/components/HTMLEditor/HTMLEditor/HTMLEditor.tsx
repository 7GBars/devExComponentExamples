import React, {PropsWithChildren} from 'react';
import {HtmlEditor} from "devextreme-react";
import {htmlEditorTools} from "./HTMLEditorTools";

type THTMLEditorOwnProps = {componentName?: string}
type THTMLEditorProps = PropsWithChildren<THTMLEditorOwnProps>;

export function MyHtmlEditor(props: THTMLEditorProps) {
  return (
    <>
      <HtmlEditor
        width={'100%'}
        height={'100%'}
      >
        {htmlEditorTools()}
      </HtmlEditor>
    </>
  );
}

