import React, { FC } from 'react';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';
import ProductActions from '../../molecules/productActions/ProductActions';
import List from '../../molecules/list/List';

interface InventorySectionProps {
  items: IListItemProps[];
  selectedItems: string[];
  onItemToggleSelect: (id: string) => void;
  onAdd: () => void;
  onNew: () => void;
}

const InventorySection: FC<InventorySectionProps> = ({
  items,
  selectedItems,
  onItemToggleSelect,
  onAdd,
  onNew,
}) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="uppercase">Inventory</h3>
        <ProductActions onAdd={onAdd} onNew={onNew} />
      </div>
      <List
        items={items}
        selectedItems={selectedItems}
        onItemToggleSelect={onItemToggleSelect}
      />
    </div>
  );
};

export default InventorySection;
