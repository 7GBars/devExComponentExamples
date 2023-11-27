const products = [
  {
    id: "1",
    text: "Stores",
    expanded: false,
    hasItems: true,
    // items: [
    //   {
    //     id: "1_1",
    //     text: "Super Mart of the West",
    //     expanded: false,
    //     hasItems: true,
    //   },
    //   {
    //     id: "1_2",
    //     text: "Braeburn",
    //     expanded: false,
    //     hasItems: false,
    //
    //   },
    //   {
    //     id: "1_3",
    //     text: "E-Mart",
    //     expanded: false,
    //     hasItems: true,
    //
    //   },
    //   {
    //     id: "1_4",
    //     text: "Walters",
    //     expanded: false,
    //     hasItems: true,
    //
    //   }
    // ]
  }
];

export const service = {
  getProducts() {
    return products;
  }
};
