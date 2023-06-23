import React from 'react';
import {Button} from "devextreme-react/button";
import {ClickEvent} from "devextreme/ui/button";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../3_wrappers/StoreWrapper";
import {DialogsStore} from "../../../0_State/DialogsStore";

interface CompanyData {
    City: string;
    State: string;
    Zipcode: string;
    Address: string;
    Phone: string;
    Fax: string;
    Website: string;
}

export const CompanyItem: React.FC<{ data: CompanyData }> = observer(({ data }) => {
    const dialogStore = useStore();

    const openDialogHandler = (e: ClickEvent) => {
        const dialogId = DialogsStore.generateDialogKey();
        dialogStore?.openDialog(dialogId, data.City, data.Phone);
    }
    return (
        <div>
            <div className="tabpanel-item">
                <div>
                    <p>
                        <b>{ data.City } </b>
                        (<span>{ data.State }</span>)
                    </p>
                    <p>
                        <span>{ data.Zipcode } </span>
                        <span>{ data.Address }</span>
                    </p>
                </div>
                <div>
                    <p>
                        Phone: <b>{ data.Phone }</b>
                    </p>
                    <p>
                        Fax: <b>{ data.Fax }</b>
                    </p>
                    <p>
                        Website: <Button onClick={openDialogHandler} text={data.Website}/>
                    </p>
                </div>
            </div>
        </div>
    );
})

