import CustomStore from "devextreme/data/custom_store";
import {PropsWithChildren} from "react";

export const getCustomSource__loadMode_row = (jsonFile: string): CustomStore<any, any>=>  {
    let dataSource =  new CustomStore({
        loadMode: 'raw',
        key: 'ID',
        load() {
            return fetch(`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/${jsonFile}`)
                .then((response) => {
                    response.json()
                });
        },
    });
    return dataSource;
};
