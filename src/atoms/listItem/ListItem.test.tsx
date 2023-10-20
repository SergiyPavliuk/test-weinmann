// ListItem.test.tsx
import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render the list item with the provided title', () => {
    render(<ListItem id="1" title="Test Item" />);

    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('should display the count when provided', () => {
    render(<ListItem id="1" title="Test Item" count={5} />);

    expect(screen.getByText('Count 5')).toBeInTheDocument();
  });

  it("shouldn't display the count when not provided", () => {
    render(<ListItem id="1" title="Test Item" />);

    const countElement = screen.queryByText(/Count \d+/);
    expect(countElement).not.toBeInTheDocument();
  });

  it('should highlight the list item when selected', () => {
    render(<ListItem id="1" title="Test Item" isSelected={true} />);

    const listItem = screen.getByText('Test Item');
    expect(listItem).toHaveClass('bg-gray-100');
  });

  it('should not highlight the list item when not selected', () => {
    render(<ListItem id="1" title="Test Item" isSelected={false} />);

    const listItem = screen.getByText('Test Item');
    expect(listItem).not.toHaveClass('bg-gray-100');
  });
});
