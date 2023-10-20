import { useCallback, useState } from 'react';

type UseToggleSelectionResult = [
  selectedItems: string[],
  toggleSelection: (id: string) => void,
  clearSelection: () => void
];

const useToggleSelection = (): UseToggleSelectionResult => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelection = useCallback((id: string) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }, []);

  const clearSelection = () => {
    setSelectedItems([]);
  };

  return [selectedItems, toggleSelection, clearSelection];
};

export default useToggleSelection;
