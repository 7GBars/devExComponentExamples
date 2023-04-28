import * as AspNetData from 'devextreme-aspnet-data-nojquery';

export const AspNetDataSource = AspNetData.createStore({
    key: 'Id',
    loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
});