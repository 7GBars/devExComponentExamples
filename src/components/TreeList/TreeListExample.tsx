import React, {PropsWithChildren, useState} from 'react';
import {SelectBox, TreeList} from "devextreme-react";
import {catalogs, TCatalogFolderType} from "./data/catalogs";
import './TreeListExample.scss';
import ArrayStore from "devextreme/data/array_store";


type TTreeListProps = PropsWithChildren<{
  blockClassName?: string;
}>
export const TreeListExample = (
  {blockClassName = 'tree-list-block', ...props}: TTreeListProps
) => {
  const [selectedCatalog, setSelectedCatalog] = useState<undefined | string>();
  const store = new ArrayStore< TCatalogFolderType>({
    key: 'Guid',
    data: catalogs.find(c => c.Guid === selectedCatalog)?.CatalogFolders ?? []
  });
  return (
    <div className={blockClassName}>
      <div className={`${blockClassName}__select-box`}>
        <SelectBox
          defaultValue={catalogs[0].Guid}
          id={`${blockClassName}__select-box`}
          items={catalogs}
          valueExpr={"Guid"}
          displayExpr={"Name"}
          onValueChange={(e) => {
            setSelectedCatalog(e);
          }}
        />
      </div>
      <div className={`${blockClassName}__tree-component`}>
        {selectedCatalog &&
          <TreeList
            id="treeList"
            dataSource={store}
            columns={[{dataField: 'Name', caption: 'Наименование'}]}
            keyExpr={'Guid'}
            hasItemsExpr={"HasChildren"}
            parentIdExpr={'HeadId'}
            onRowExpanding={async (e) => {
              const parentGuid = e.key;
              const ds = e.component.getDataSource();

              let newItem;
               setTimeout(() => {
                 newItem = {
                   "Id": -406 + Math.round(Math.random()),
                   "Guid": "84090708-afe2-483f-af40-d82e28844d39" + Math.round(Math.random() * 100),
                   "Name": "Новый объект" + Math.round(Math.random()),
                   "CatalogFolderType": 0,
                   "HasChildren": true,
                   "HeadId": parentGuid
                 }
                 ds.store().insert(newItem).then(() =>  ds.reload());
                 }, 500)
              console.log('parentGuid', parentGuid);



            }}
          />
        }

      </div>
    </div>
  );
}

