import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';
import IListItemProps from './interfaces/IListItemProps';

describe('ListItem', () => {
  const baseProps: IListItemProps = {
    id: '1',
    title: 'Test Item',
    count: 5,
    isSelected: false,
  };

  it('renders the provided title', () => {
    render(<ListItem {...baseProps} />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders the count if provided', () => {
    render(<ListItem {...baseProps} count={5} />);
    expect(screen.getByText('Count 5')).toBeInTheDocument();
  });

  it('does not render count if not provided', () => {
    const { count, ...propsWithoutCount } = baseProps;
    render(<ListItem {...propsWithoutCount} />);
    expect(screen.queryByText(/^Count/)).not.toBeInTheDocument();
  });

  it('applies the selected class if isSelected is true', () => {
    render(<ListItem {...baseProps} isSelected={true} />);
    const listItem = screen.getByText('Test Item').closest('li');
    expect(listItem).toHaveClass('bg-gray-100');
  });

  it('does not apply the selected class if isSelected is false', () => {
    render(<ListItem {...baseProps} isSelected={false} />);
    const listItem = screen.getByText('Test Item').closest('li');
    expect(listItem).not.toHaveClass('bg-gray-100');
  });

  it('calls onToggleSelect with correct id when clicked', () => {
    const onToggleSelectMock = vi.fn();
    render(<ListItem {...baseProps} onToggleSelect={onToggleSelectMock} />);
    fireEvent.click(screen.getByText('Test Item'));
    expect(onToggleSelectMock).toHaveBeenCalledWith('1');
  });
});
