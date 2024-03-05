import CustomStore from "devextreme/data/custom_store";

export const customStore = new CustomStore({
  key: 'id',
  loadMode: "processed",
  async load(loadOptions) {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        if (loadOptions.skip && loadOptions.take) {
          const currentPage = loadOptions.skip / loadOptions.take;
          console.log(data)
          console.log('currentPage', currentPage);
          console.log('totalCount', data.length)
        }

        return {data, totalCount: 500}
      })

  }
})