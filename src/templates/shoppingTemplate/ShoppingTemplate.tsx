import { FC } from 'react';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';
import InventorySection from '../../organisms/inventorySection/InventorySection';
import BasketSection from '../../organisms/basketSection/BasketSection';

interface IShoppingTemplateProps {
  inventoryItems: IListItemProps[];
  selectedInventoryItems: string[];
  onInventoryItemToggleSelect: (id: string) => void;
  onAddToCart: () => void;
  onNewInventoryItem: () => void;

  cartItems: IListItemProps[];
  selectedCartItems: string[];
  onCartItemToggleSelect: (id: string) => void;
  onRemoveFromCart: () => void;

  totalItemsCount: number;
}

const ShoppingTemplate: FC<IShoppingTemplateProps> = ({
  inventoryItems,
  selectedInventoryItems,
  onInventoryItemToggleSelect,
  onAddToCart,
  onNewInventoryItem,

  cartItems,
  selectedCartItems,
  onCartItemToggleSelect,
  onRemoveFromCart,

  totalItemsCount,
}) => {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-between">
      <div className="flex md:flex-row flex-col">
        <InventorySection
          items={inventoryItems}
          selectedItems={selectedInventoryItems}
          onItemToggleSelect={onInventoryItemToggleSelect}
          onAdd={onAddToCart}
          onNew={onNewInventoryItem}
        />

        <BasketSection
          items={cartItems}
          selectedItems={selectedCartItems}
          onItemToggleSelect={onCartItemToggleSelect}
          onRemove={onRemoveFromCart}
        />
      </div>

      <div className="total mt-4 mx-4 p-4 border border-gray-700 flex justify-end">
        Total: {totalItemsCount}
      </div>
    </div>
  );
};

export default ShoppingTemplate;
