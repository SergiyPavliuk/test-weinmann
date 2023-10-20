import { render, screen } from '@testing-library/react';
import List from './List';

describe('List', () => {
  const mockItems = [
    { id: '1', title: 'Item 1', count: 10 },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3', count: 5 },
  ];

  it('should render the correct number of list items', () => {
    render(<List items={mockItems} selectedItems={[]} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });

  it('should highlight selected items', () => {
    render(<List items={mockItems} selectedItems={['1', '3']} />);

    const selectedItem1 = screen.getByText('Item 1');
    const selectedItem3 = screen.getByText('Item 3');

    expect(selectedItem1.closest('li')).toHaveClass('bg-gray-100');
    expect(selectedItem3.closest('li')).toHaveClass('bg-gray-100');
  });
});
