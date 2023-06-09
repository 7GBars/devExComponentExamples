import {Item, Toolbar} from "devextreme-react/html-editor";
import React from "react";

const createItemOptions = (hint: string) => ({ hint, text: hint });
const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
const fontValues = ["Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana"];
const headerValues = [false, 1, 2, 3, 4, 5];

export const htmlEditorTools = () => {
  return <Toolbar multiline={false}>
    <Item name="undo" />
    <Item name="redo" />
    <Item name="separator" />
    <Item
      name="size"
      acceptedValues={sizeValues}
    />
    <Item
      name="font"
      acceptedValues={fontValues}
    />
    <Item name="separator" />
    <Item
      name="bold" options={createItemOptions('Насыщеный')}
    />
    <Item name="italic" options={createItemOptions('Курсив')} />
    <Item name="strike" options={createItemOptions('Зачеркнутый')}/>
    <Item name="underline" options={createItemOptions('Подчеркнутый')} />
    <Item name="separator" />
    <Item name="alignLeft" options={createItemOptions('Выравнивание по левому краю')} />
    <Item name="alignCenter" options={createItemOptions('Выравнивание по центру')} />
    <Item name="alignRight" options={createItemOptions('Выравнивание по правому краю')} />
    <Item name="alignJustify" options={createItemOptions('Выравнивание по ширине')} />
    <Item name="separator" />
    <Item name="orderedList" options={createItemOptions('Нумерованный список')} />
    <Item name="bulletList" options={createItemOptions('Маркированный список')} />
    <Item name="separator" />
    <Item
      name="header"
      acceptedValues={headerValues}
    />
    <Item name="separator" />
    <Item name="color" options={createItemOptions('Цвет')} />
    <Item name="background" options={createItemOptions('Изменить цвет фона')} />
    <Item name="separator" />
    <Item name="clear" options={createItemOptions('Очистить форматирование')} />
    <Item name="codeBlock" options={createItemOptions('Блок кода')} />
    <Item name="separator" />
    <Item name="insertTable" options={createItemOptions('Вставить таблицу')} />
    <Item name="deleteTable" options={createItemOptions('Удалить таблицу')} />
    <Item name="insertRowAbove" options={createItemOptions('Вставить строку сверху')} />
    <Item name="insertRowBelow" options={createItemOptions('Вставить строку снизу')} />
    <Item name="deleteRow" options={createItemOptions('Удалить строку')} />
    <Item name="insertColumnLeft" options={createItemOptions('Вставить колонку слева')} />
    <Item name="insertColumnRight" options={createItemOptions('Вставить колонку справа')} />
    <Item name="deleteColumn" options={createItemOptions('Удалить колонку')} />
  </Toolbar>
}