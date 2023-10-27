import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import List, { IListProps } from './List';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';

describe('List', () => {
  const mockItems: IListItemProps[] = [
    { id: '1', title: 'Item 1', count: 10, isSelected: false },
    { id: '2', title: 'Item 2', isSelected: false },
    { id: '3', title: 'Item 3', count: 5, isSelected: false },
  ];

  const baseProps: IListProps = {
    items: mockItems,
    selectedItems: [],
  };

  it('renders list items', () => {
    render(<List {...baseProps} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('marks item as selected if its id is in the selectedItems array', () => {
    render(<List {...baseProps} selectedItems={['1']} />);
    const listItem = screen.getByText('Item 1').closest('li');
    expect(listItem).toHaveClass('bg-gray-100');
  });

  it('does not mark item as selected if its id is not in the selectedItems array', () => {
    render(<List {...baseProps} />);
    const listItem = screen.getByText('Item 1').closest('li');
    expect(listItem).not.toHaveClass('bg-gray-100');
  });

  it('calls onItemToggleSelect when a list item is clicked', () => {
    const onItemToggleSelectMock = vi.fn();
    render(<List {...baseProps} onItemToggleSelect={onItemToggleSelectMock} />);
    fireEvent.click(screen.getByText('Item 1'));
    expect(onItemToggleSelectMock).toHaveBeenCalledWith('1');
  });

  it('renders multiple list items', () => {
    const items = [...mockItems, { id: '4', title: 'Item 4', count: 2 }];
    render(<List {...baseProps} items={items} />);
    expect(screen.getByText('Item 4')).toBeInTheDocument();
  });
});
