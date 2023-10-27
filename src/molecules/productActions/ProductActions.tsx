import React from 'react';
import Button from '../../atoms/button/Button';

export interface ProductActionsProps {
  onAdd?: () => void;
  onNew?: () => void;
  onRemove?: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
  onAdd,
  onNew,
  onRemove,
}) => {
  return (
    <div className="flex">
      {onNew && <Button label="New" className="mr-2" onClick={onNew} />}
      {onAdd && <Button label="Add" onClick={onAdd} />}
      {onRemove && <Button label="Remove" onClick={onRemove} />}
    </div>
  );
};

export default ProductActions;
