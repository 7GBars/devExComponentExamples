import React, {PropsWithChildren, useState} from 'react';
import Popup from "devextreme-react/popup";
import PopupTestContent from "./popupContent/popupTestContent";
import {Button} from "devextreme-react/button";

type TDevExPopupProps = PropsWithChildren<{}>;


export function DevExPopup(props: TDevExPopupProps) {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    return (
        <div id={'popup'}>
            <Popup
              visible={dialogOpen}
              contentRender={() => <PopupTestContent/>}
            />
            <Button
              text={`${dialogOpen ? 'close': 'show'}`}
              onClick={e => setDialogOpen(!dialogOpen)}
            />
        </div>
    );
}

