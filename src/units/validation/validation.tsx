import React, {useState} from 'react';
import {TextArea} from "devextreme-react";
import {TextBox} from "devextreme-react/text-box";
import Validator, {RequiredRule} from "devextreme-react/validator";
import {Button} from "devextreme-react/button";

function Validation() {
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [info, setInfo] = useState('')
  return (
    <div>
      <TextBox>
        <Validator>
          <RequiredRule message="Нужно заполнить имя" />
        </Validator>
      </TextBox>
      <TextBox>
        <Validator>
          <RequiredRule message="Нужно заполнить тему обращения" />
        </Validator>
      </TextBox>
      <TextArea>
        <Validator>
          <RequiredRule message="Нужно заполнить информацию" />
        </Validator>
      </TextArea>
      <Button text={'Отправить форму'}/>
    </div>
  );
}

export default Validation;