import React, { FC } from 'react';
import IListItemProps from './interfaces/IListItemProps';

const ListItem: FC<IListItemProps> = ({
  id,
  title,
  count,
  isSelected,
  onToggleSelect,
}) => {
  return (
    <li
      className={`border p-4 flex justify-between cursor-pointer ${
        isSelected ? 'bg-gray-100' : ''
      }`}
      onClick={() => onToggleSelect && onToggleSelect(id)}
    >
      {title} {count && <span>Count {count}</span>}
    </li>
  );
};

export default ListItem;
