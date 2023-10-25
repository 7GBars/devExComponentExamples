import {SelectBox} from "devextreme-react";
import Validator, {RequiredRule} from "devextreme-react/validator";
import {useRef} from "react";
import {Button} from "devextreme-react/button";

export const DevExSelectBox = (props: any) => {
  const products = [
    {name: 'Продукт', id: 1},
    {name: 'Ghjlern2', id: 2},
    {name: 'Тест', id: 3}
  ]
  const selectBoxRef = useRef<SelectBox>(null);
  return (
    <div>
      <SelectBox
        ref={selectBoxRef}
        dataSource={products}
        valueExpr={'id'}
        displayExpr={'name'}

      >
        <Validator>
          <RequiredRule message="Нужно выбрать продукт" />
        </Validator>
      </SelectBox>
      <Button text={'validate'} onClick={(e) => {
        console.log(e)
        const { isValid } = e.validationGroup.validate();
        // selectBoxRef.current?.instance.
      }}/>
    </div>
  );
}

