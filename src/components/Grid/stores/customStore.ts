import CustomStore from "devextreme/data/custom_store";

export const customStore = new CustomStore({
  key: 'id',
  loadMode: "processed",
  load(loadOptions) {
    console.log('load', loadOptions)
    return fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=100')
      .then(res => res.json())
      .then(data => {
        if (loadOptions.skip && loadOptions.take) {
          const currentPage = loadOptions.skip / loadOptions.take;

          console.log('currentPage', currentPage);
          console.log('totalCount', data.length)
        }

        return {data, totalCount: 500}
      })

  }
})