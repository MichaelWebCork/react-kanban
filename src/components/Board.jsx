import { useListStore } from "../store";
import Button from "./Button";
import List from "./List";

export default function Board() {
  const { lists, addList } = useListStore();
  const onNewList = () => {
    addList("New list");
  };
  return (
    <div className="w-svw h-svh bg-primary-50 p-4 flex items-start gap-4 overflow-auto">
      {Object.values(lists).map(({ id, title, cards }) => (
        <List key={id} id={id} title={title} />
      ))}
      <Button label="Add another list" onClick={() => onNewList()} />
    </div>
  );
}
