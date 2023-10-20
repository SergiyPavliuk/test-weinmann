import React, { FC } from 'react';
import ListItem from '../../atoms/listItem/ListItem';
import IListItemProps from '../../atoms/listItem/interfaces/IListItemProps';

interface IListProps {
  items: IListItemProps[];
  onItemToggleSelect?: (title: string) => void;
  selectedItems: string[];
}

const List: FC<IListProps> = ({ items, onItemToggleSelect, selectedItems }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          title={item.title}
          count={item.count}
          isSelected={selectedItems.includes(item.id)}
          onToggleSelect={onItemToggleSelect}
        />
      ))}
    </ul>
  );
};

export default List;
