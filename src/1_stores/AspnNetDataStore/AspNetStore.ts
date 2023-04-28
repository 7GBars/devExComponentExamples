import * as AspNetData from 'devextreme-aspnet-data-nojquery';

export const AspNetDataSource = AspNetData.createStore({
    key: 'id',
    loadUrl: 'https://jsonplaceholder.typicode.com/photos',
});