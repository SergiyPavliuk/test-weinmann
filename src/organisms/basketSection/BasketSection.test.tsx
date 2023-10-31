import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BasketSection from './BasketSection';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';

describe('BasketSection', () => {
  const mockItems: IListItemProps[] = [
    { id: '1', title: 'Item 1', count: 10, isSelected: false },
    { id: '2', title: 'Item 2', isSelected: false },
    { id: '3', title: 'Item 3', count: 5, isSelected: false },
  ];
  const mockSelectedItems = ['1'];

  const onItemToggleSelectMock = vi.fn();
  const onRemoveMock = vi.fn();

  it('should render the Inventory title', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={[]}
        onItemToggleSelect={onItemToggleSelectMock}
        onRemove={onRemoveMock}
      />
    );

    expect(screen.getByText('Basket')).toBeInTheDocument();
  });

  it('should render the correct number of items', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={[]}
        onItemToggleSelect={onItemToggleSelectMock}
        onRemove={onRemoveMock}
      />
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  it('renders the ProductActions component with onRemove prop', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={mockSelectedItems}
        onItemToggleSelect={onItemToggleSelectMock}
        onRemove={onRemoveMock}
      />
    );

    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('calls onRemove when "Remove" button is clicked', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={mockSelectedItems}
        onItemToggleSelect={onItemToggleSelectMock}
        onRemove={onRemoveMock}
      />
    );

    fireEvent.click(screen.getByText('Remove'));
    expect(onRemoveMock).toHaveBeenCalled();
  });

  it('renders the List component with provided items and selectedItems', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={mockSelectedItems}
        onItemToggleSelect={onItemToggleSelectMock}
        onRemove={onRemoveMock}
      />
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
