import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductActions from './ProductActions';

describe('ProductActions', () => {
  it('renders the "New" button when onNew is provided', () => {
    render(<ProductActions onNew={() => {}} />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders the "Add" button when onAdd is provided', () => {
    render(<ProductActions onAdd={() => {}} />);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('renders the "Remove" button when onRemove is provided', () => {
    render(<ProductActions onRemove={() => {}} />);
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('does not render the "New" button when onNew is not provided', () => {
    render(<ProductActions />);
    expect(screen.queryByText('New')).toBeNull();
  });

  it('calls onNew when "New" button is clicked', () => {
    const onNewMock = vi.fn();
    render(<ProductActions onNew={onNewMock} />);
    fireEvent.click(screen.getByText('New'));
    expect(onNewMock).toHaveBeenCalled();
  });

  it('calls onAdd when "Add" button is clicked', () => {
    const onAddMock = vi.fn();
    render(<ProductActions onAdd={onAddMock} />);
    fireEvent.click(screen.getByText('Add'));
    expect(onAddMock).toHaveBeenCalled();
  });

  it('calls onRemove when "Remove" button is clicked', () => {
    const onRemoveMock = vi.fn();
    render(<ProductActions onRemove={onRemoveMock} />);
    fireEvent.click(screen.getByText('Remove'));
    expect(onRemoveMock).toHaveBeenCalled();
  });
});
