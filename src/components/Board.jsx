import Button from "./Button";
import List from "./List";

const onNewList = () => {
  console.log('click')
}

export default function Board() {
  return (
    <div className="w-svw h-svh bg-primary-50 p-4 flex items-start gap-4 overflow-auto">
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <Button label='Add another list' onClick={() => onNewList()}/>
    </div>
  )
}