import CustomStore from "devextreme/data/custom_store";

export const customStore = new CustomStore({
  key: 'id',
  loadMode: "processed",
  load(loadOptions) {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        return {data, totalCount: data.length}
      })
      return Promise.resolve({data: [], totalCount: 0})
  }
})