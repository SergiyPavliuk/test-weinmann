import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import InventorySection from './InventorySection';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';

describe('InventorySection', () => {
  const mockItems: IListItemProps[] = [
    { id: '1', title: 'Item 1', count: 10 },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3', count: 5 },
  ];

  const onItemToggleSelectMock = vi.fn();
  const onAddMock = vi.fn();
  const onNewMock = vi.fn();

  const mockProps = {
    items: mockItems,
    selectedItems: ['1', '3'],
    onItemToggleSelect: onItemToggleSelectMock,
    onAdd: onAddMock,
    onNew: onNewMock,
  };

  beforeEach(() => {
    render(<InventorySection {...mockProps} />);
  });

  afterEach(() => {
    vi.clearAllMocks();
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

  it('calls onAdd when "Add" button is clicked', () => {
    fireEvent.click(screen.getByText('Add'));
    expect(onAddMock).toHaveBeenCalled();
  });

  it('calls onNew when "New" button is clicked', () => {
    fireEvent.click(screen.getByText('New'));
    expect(onNewMock).toHaveBeenCalled();
  });
});
