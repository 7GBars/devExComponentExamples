export const dataSource = [
  {
    id: 1,
    name: "John",
    age: 25,
    gender: "Male",
    isAdmin: true,
  },
  {
    id: 2,
    name: "Jane",
    age: 30,
    gender: "Female",
    isAdmin: false,
  },
  {
    id: 3,
    name: "Bob",
    age: 40,
    gender: "Male",
    isAdmin: false,
  },
  {
    id: 4,
    name: "Baby",
    age: 20,
    gender: "Male",
    isAdmin: false,
  },
  {
    id: 5,
    name: "Barbara",
    age: 23,
    gender: "Female",
    isAdmin: false,
  },
  {
    id: 6,
    name: "Luck",
    age: 33,
    gender: "Male",
    isAdmin: true,
  },
  {
    id: 7,
    name: "Lola",
    age: 12,
    gender: "Female",
    isAdmin: false,
  },
];

export type RowObjectDataType = typeof dataSource[number];
