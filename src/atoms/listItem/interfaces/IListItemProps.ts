interface IListItemProps {
  id: string;
  title: string;
  count?: number;
  isSelected?: boolean;
  onToggleSelect?: (title: string) => void;
}
export default IListItemProps;
