import { render, screen } from '@testing-library/react';
import BasketSection from './BasketSection';

describe('BasketSection', () => {
  const mockItems = [
    { id: '1', title: 'Item 1', count: 10 },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3', count: 5 },
  ];

  it('should render the Inventory title', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={[]}
        onItemToggleSelect={() => {}}
        onRemove={() => {}}
      />
    );

    expect(screen.getByText('Inventory')).toBeInTheDocument();
  });

  it('should render the correct number of items', () => {
    render(
      <BasketSection
        items={mockItems}
        selectedItems={[]}
        onItemToggleSelect={() => {}}
        onRemove={() => {}}
      />
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});
