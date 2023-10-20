import { FC, FormEvent, useId, useState } from 'react';
import IProduct from '../../api/interfaces/IProducts';
import Button from '../../atoms/button/Button';

interface NewInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: IProduct) => void;
}

const NewInventoryModal: FC<NewInventoryModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [title, setTitle] = useState<string>('');
  const newId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ id: newId, title });
      setTitle('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg w-96 p-6 shadow-lg">
        <h2 className="text-2xl mb-4">Add New Invertor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded w-full py-2 px-3"
              placeholder="Invertor Title"
            />
          </div>
          <div className="flex justify-end">
            <Button
              label="Cancel"
              className="bg-red-500 hover:bg-red-400 text-white mr-2"
              onClick={onClose}
            />
            <Button label="Add" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewInventoryModal;
