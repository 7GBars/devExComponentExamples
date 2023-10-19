import React, {PropsWithChildren, useState} from 'react';
import {SelectBox} from "devextreme-react";
import {catalogs} from "./data/catalogs";
import './TreeListExample.scss';



type TTreeListProps = PropsWithChildren<{
  blockClassName?: string;
}>
export const TreeListExample =(
  {blockClassName = 'tree-list-block',...props}: TTreeListProps
) => {
  const [selectedCatalog, setSelectedCatalog] = useState();
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
        there will be treeList
      </div>
    </div>
  );
}

