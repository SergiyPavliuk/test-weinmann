// ProductActions.test.tsx
import { render, screen } from '@testing-library/react';
import ProductActions from './ProductActions';

describe('ProductActions', () => {
  it('should render the "New" button when onNew prop is provided', () => {
    render(<ProductActions onNew={() => {}} />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('should not render the "New" button when onNew prop is not provided', () => {
    render(<ProductActions />);
    expect(screen.queryByText('New')).toBeNull();
  });

  it('should render the "Add" button when onAdd prop is provided', () => {
    render(<ProductActions onAdd={() => {}} />);
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should not render the "Add" button when onAdd prop is not provided', () => {
    render(<ProductActions />);
    expect(screen.queryByText('Add')).toBeNull();
  });

  it('should render the "Remove" button when onRemove prop is provided', () => {
    render(<ProductActions onRemove={() => {}} />);
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('should not render the "Remove" button when onRemove prop is not provided', () => {
    render(<ProductActions />);
    expect(screen.queryByText('Remove')).toBeNull();
  });
});
