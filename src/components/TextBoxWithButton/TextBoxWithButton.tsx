import React, {useRef} from 'react';
import { TextBox, Button as TextBoxButton } from 'devextreme-react/text-box';
import Validator, {AsyncRule, RequiredRule} from "devextreme-react/validator";

function TextBoxWithButton(props: any) {
  const isValidRef = useRef(false);

  const validateINN = async (e: any) => {
    return isValidRef.current ? Promise.resolve() : Promise.reject();
  }

  const passwordButton = {
    icon: 'check',
    hint: 'Проверить ИНН',
    onClick: async (e: any) => {
      const { isValid } = e.validationGroup.validate();
      console.log('e.validationGroup', e.validationGroup);
      console.log(isValid);
      if (!isValid) { return }

      // console.log('click validate')
      setTimeout(() => {
        isValidRef.current = true
      }, 1000)

    }
  }
  return (
    <div>

      <TextBox
        placeholder="Введите ИНН организации"
        stylingMode="filled"
        >
        <TextBoxButton
          name="password"
          location="after"
          options={passwordButton}
        />
        <Validator>
          {/*<RequiredRule message="Обязательное для заполнения поле"  />*/}
          <AsyncRule    validationCallback={validateINN}
                        message="Проверьте ИНН" />
        </Validator>
      </TextBox>

    </div>
  );
}

export default TextBoxWithButton;