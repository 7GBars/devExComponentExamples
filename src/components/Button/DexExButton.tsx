import React, {useRef} from 'react';
import {Button, IButtonOptions} from "devextreme-react/button";

type TTemplateProps = {widget: 'dxButton', template: 'items[2].template', isHiding: boolean};
type TDexExButtonProps = Partial<IButtonOptions>;

function DexExButton(props: TDexExButtonProps & TTemplateProps) {
  const buttonRef = useRef<Button>(null);
  const icon = props.icon;

  console.log('render button component', buttonRef.current?.instance.option(''));
  return (
    <>
      <Button
        onInitialized={(e) => {
          e.component?.option('icon', props.icon)
        }}
        ref={buttonRef}
        id={'test'}
        hint={props.text}
        text={props.text}
        onClick={props.onClick}
        disabled={props.isHiding ?? false}
      />
    </>
  );
}

export default DexExButton;