import React, {FC} from 'react';
import {DropDownButton} from "devextreme-react";


type TDropDownButtonItemTemplateProps = {

};

export const DropDownButtonItemTemplate: FC<TDropDownButtonItemTemplateProps> = React.memo((props) => {
  debugger
  return (
   <DropDownButton text={'Название'}/>
  );
});


