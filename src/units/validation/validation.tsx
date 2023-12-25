import React, {useState} from 'react';
import {TextArea} from "devextreme-react";
import {TextBox} from "devextreme-react/text-box";
import Validator, {RequiredRule} from "devextreme-react/validator";
import {Button} from "devextreme-react/button";
import notify from 'devextreme/ui/notify';

function Validation() {
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [info, setInfo] = useState('')
  return (
    <div>
      Имя:
      <TextBox>
        <Validator>
          <RequiredRule message="Нужно заполнить имя"/>
        </Validator>
      </TextBox>
      Тема:
      <TextBox>
        <Validator>
          <RequiredRule message="Нужно заполнить тему обращения"/>
        </Validator>
      </TextBox>
      Текст обращения:
      <TextArea>
        <Validator>
          <RequiredRule message="Нужно заполнить информацию"/>
        </Validator>
      </TextArea>
      <Button text={'Автоматическая валидация'} useSubmitBehavior/>
      <Button
        text={'Кастомная валидация'}
        onClick={(e) => {
          const validateInfo = e.validationGroup.validate();
          const {isValid} = validateInfo;
          if (isValid) {
            alert('Запрос пошел')
          } else {
            const brokenRules = validateInfo.brokenRules;
            brokenRules &&  notify(brokenRules[0].message, "warning", 500)
          }
        }}
      />
    </div>
  );
}

export default Validation;