import React from 'react';
import {Button, IButtonOptions} from "devextreme-react/button";

type TTemplateProps = {widget: 'dxButton', template: 'items[2].template', isHiding: boolean};
type TDexExButtonProps = Partial<IButtonOptions>;

function DexExButton(props: TDexExButtonProps & TTemplateProps) {
  return (
    <>
      <Button
        id={'test'}
        icon={props.icon}
        hint={props.text}
        text={props.text}
        onClick={props?.onClick}
        disabled={props.isHiding ?? false}
      />
    </>
  );
}

export default DexExButton;