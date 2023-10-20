import { render, screen } from '@testing-library/react';
import InventorySection from './InventorySection';

describe('InventorySection', () => {
  const mockItems = [
    { id: '1', title: 'Item 1', count: 10 },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3', count: 5 },
  ];

  const mockProps = {
    items: mockItems,
    selectedItems: ['1', '3'],
    onItemToggleSelect: () => {},
    onAdd: () => {},
    onNew: () => {},
  };

  beforeEach(() => {
    render(<InventorySection {...mockProps} />);
  });

  it('should render the Inventory title', () => {
    expect(screen.getByText('Inventory')).toBeInTheDocument();
  });

  it('should render ProductActions with correct props', () => {
    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('should render List with the correct items', () => {
    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('should render List with the correct selected items', () => {
    expect(screen.getByText('Item 1')).toHaveClass('bg-gray-100');
    expect(screen.getByText('Item 3')).toHaveClass('bg-gray-100');
    expect(screen.getByText('Item 2')).not.toHaveClass('bg-gray-100');
  });
});
