import React, {PropsWithChildren, useState} from 'react';
import {SelectBox, TreeList, TreeView} from "devextreme-react";
import {service} from "./data/catalogs";
import './TreeView.scss';
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import ODataStore from "devextreme/data/odata/store";


type TTreeListProps = PropsWithChildren<{
  blockClassName?: string;
}>
export const TreeViewTest = (
  {blockClassName = 'tree-list-block', ...props}: TTreeListProps
) => {

  const store = new ArrayStore<any>({
    data: service.getProducts() ?? []
  });

  const dataSource = new DataSource({ store, key: 'id'})

  const dataSource2 = new DataSource({
    store: new ODataStore({
      url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/HierarchicalItems',
    }),
  });
  const createChildren = async (parent: any) => {
    const parentId = parent ? parent.itemData.id : '';
    return service.getProducts();
  }

  return (
    <div className={blockClassName}>
      <TreeView
        dataSource={dataSource}
        id="simple-treeview"
        dataStructure="tree"
        rootValue=""
        height={500}

        // createChildren={createChildren}
      />
    </div>
  );
}

