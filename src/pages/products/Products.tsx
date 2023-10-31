import React, { FC, useState } from 'react';
import useToggleSelection from '../../hooks/useToggleSelection';
import ShoppingTemplate from '../../templates/shoppingTemplate/ShoppingTemplate';
import useProducts from '../../models/useProducts/useProducts';
import { useQueryClient } from 'react-query';
import IProduct from '../../api/interfaces/IProduct';
import NewInventoryModal from '../../organisms/newInventoryModal/NewInventoryModal';
interface CartItem {
  id: string;
  title: string;
  count: number;
}

const Products: FC = () => {
  const { data } = useProducts();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItems, toggleSelection, clearSelection] = useToggleSelection();
  const [selectedCartItems, toggleCartSelection, clearCartSelection] =
    useToggleSelection();
  const queryClient = useQueryClient();
  const handleNewInventoryItem = (product: IProduct) => {
    const newData = [...(data || []), product];
    queryClient.setQueryData(['ListProductsQuery'], newData);
  };
  const addToCart = () => {
    const newCart = [...cart];

    for (const id of selectedItems) {
      const existingCartItem = newCart.find((item) => item.id === id);
      if (existingCartItem) {
        existingCartItem.count += 1;
      } else {
        const product = data?.find((product) => product.id === id);
        if (product) {
          newCart.push({
            id: product.id,
            title: product.title,
            count: 1,
          });
        }
      }
    }

    setCart(newCart);
    clearSelection();
  };
  const removeFromCart = () => {
    setCart((prevCart) =>
      prevCart.filter((item) => !selectedCartItems.includes(item.id))
    );
    clearCartSelection();
  };
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);
  return (
    <>
      <ShoppingTemplate
        inventoryItems={data || []}
        selectedInventoryItems={selectedItems}
        onInventoryItemToggleSelect={toggleSelection}
        onAddToCart={addToCart}
        onNewInventoryItem={() => setModalOpen(true)}
        cartItems={cart}
        selectedCartItems={selectedCartItems}
        onCartItemToggleSelect={toggleCartSelection}
        onRemoveFromCart={removeFromCart}
        totalItemsCount={totalCount}
      />
      <NewInventoryModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleNewInventoryItem}
      />
    </>
  );
};

export default Products;
