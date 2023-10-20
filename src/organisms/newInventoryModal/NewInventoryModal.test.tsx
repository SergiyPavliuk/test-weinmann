import { render, screen } from '@testing-library/react';
import NewInventoryModal from './NewInventoryModal';

describe('NewInventoryModal', () => {
  const onCloseMock = () => {};
  const onAddMock = () => {};

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
});
