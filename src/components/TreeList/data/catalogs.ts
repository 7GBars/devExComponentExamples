export const catalogs = [
  {
    "Name": "Все объекты",
    "Guid": "",
    "CatalogFolders": []
  },
  {
    "Name": "Типы",
    "Id": -1,
    "Guid": "f882d634-44d7-4885-a796-15be277d3020",
    "CatalogFolders": [
      {
        "Id": -3836,
        "Guid": "8426a013-edbe-4f4f-856e-5cf47e1c95ca",
        "Name": "simpleTest hierarhy complex",
        "CatalogFolderType": 0,
        "HasChildren": false
      },
      {
        "Id": -3837,
        "Guid": "f987161e-bea4-456b-8a0c-87f31d8431c3",
        "Name": "user",
        "CatalogFolderType": 0,
        "HasChildren": true
      },
      {
        "Id": -3928,
        "Guid": "2566ddfa-854c-4717-a3d3-57759600a80c",
        "Name": "default dialog",
        "CatalogFolderType": 0,
        "HasChildren": false
      },
      {
        "Id": -3956,
        "Guid": "fb2d87fa-bd4e-461e-9950-3829af010499",
        "Name": "Просто",
        "CatalogFolderType": 0,
        "HasChildren": false
      },
      {
        "Id": -4076,
        "Guid": "84068708-afe2-483f-af40-d82e28844d39",
        "Name": "Мой тип",
        "CatalogFolderType": 0,
        "HasChildren": false
      }
    ],
    "IsPrivate": false,
    "CatalogType": 1
  }
];

export type TCatalogFolderType = {
  Id: number,
  Guid: string,
  Name: string,
  CatalogFolderType: number,
  HasChildren: boolean,
  HeadId?: string
}