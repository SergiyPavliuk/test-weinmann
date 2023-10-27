import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NewInventoryModal from './NewInventoryModal';

describe('NewInventoryModal', () => {''
  const onCloseMock = vi.fn();
  const onAddMock = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not render if isOpen is false', () => {
    render(
      <NewInventoryModal
        isOpen={false}
        onClose={onCloseMock}
        onAdd={onAddMock}
      />
    );
    expect(screen.queryByText('Add New Invertor')).not.toBeInTheDocument();
  });

  it('should render if isOpen is true', () => {
    render(
      <NewInventoryModal
        isOpen={true}
        onClose={onCloseMock}
        onAdd={onAddMock}
      />
    );
    expect(screen.getByText('Add New Invertor')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Invertor Title')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should close the modal when "Cancel" button is clicked', () => {
    render(
      <NewInventoryModal
        isOpen={true}
        onClose={onCloseMock}
        onAdd={onAddMock}
      />
    );
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onAdd with the right product when the form is submitted', () => {
    render(
      <NewInventoryModal
        isOpen={true}
        onClose={onCloseMock}
        onAdd={onAddMock}
      />
    );
    const input = screen.getByPlaceholderText('Invertor Title');
    fireEvent.change(input, { target: { value: 'Test Invertor' } });
    fireEvent.submit(screen.getByText('Add').closest('form')!);

    expect(onAddMock).toHaveBeenCalledWith(
      expect.objectContaining({ title: 'Test Invertor' })
    );
    expect(onCloseMock).toHaveBeenCalled();
  });
});
