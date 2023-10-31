import React, { FC } from 'react';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';
import ProductActions from '../../molecules/productActions/ProductActions';
import List from '../../molecules/list/List';

interface BasketSectionProps {
  items: IListItemProps[];
  selectedItems: string[];
  onItemToggleSelect: (id: string) => void;
  onRemove: () => void;
}

const BasketSection: FC<BasketSectionProps> = ({
  items,
  selectedItems,
  onItemToggleSelect,
  onRemove,
}) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="mb-4 flex justify-between items-center">
        <h3 className="uppercase">Basket</h3>
        <ProductActions onRemove={onRemove} />
      </div>
      <List
        items={items}
        selectedItems={selectedItems}
        onItemToggleSelect={onItemToggleSelect}
      />
    </div>
  );
};

export default BasketSection;
