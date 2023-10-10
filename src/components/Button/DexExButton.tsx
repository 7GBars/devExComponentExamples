import React, {useRef} from 'react';
import {Button, IButtonOptions} from "devextreme-react/button";

type TTemplateProps = {widget: 'dxButton', template: 'items[2].template', isHiding: boolean};
type TDexExButtonProps = Partial<IButtonOptions>;

function DexExButton(props: TDexExButtonProps & TTemplateProps) {
  const buttonRef = useRef<Button>(null);
  return (
    <>
      <Button
        ref={buttonRef}
        id={'test'}
        icon={props.icon}
        hint={props.text}
        text={props.text}
        onClick={props.onClick}
        disabled={props.isHiding ?? false}
      />
    </>
  );
}

export default DexExButton;