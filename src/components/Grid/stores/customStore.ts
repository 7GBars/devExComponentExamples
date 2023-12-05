import CustomStore from "devextreme/data/custom_store";

export const customStore = new CustomStore({
  key: 'id',
  loadMode: "processed",
  load(loadOptions) {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        if (loadOptions.skip && loadOptions.take) {
          const currentPage = loadOptions.skip / loadOptions.take;
          console.log('currentPage', currentPage);
        }

        return {data, totalCount: data.length}
      })
      return Promise.resolve({data: [], totalCount: 0})
  }
})