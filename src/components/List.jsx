import { useCardStore, useListStore } from "../store";
import Button from "./Button";

export default function List({ id, title }) {
  const { addCard } = useCardStore();
  const { cards } = useCardStore((state) => state.cardsByListId(id));
  const onAddCard = () => {
    addCard(id);
    console.log(cards);
  };
  return (
    <div className="bg-primary-950 min-w-96 min-h-44 rounded-lg py-4 px-2 flex flex-col gap-4">
      <header>
        <h2
          className="text-primary-200 font-bold"
          contentEditable="plaintext-only"
        ></h2>
      </header>
      {/* {cards.map((card) => (
        <div className="h-60 outline-primary-900 outline-2 rounded-lg"></div>
      ))} */}
      <footer className="flex flex-col">
        <Button type="outline" label="Add card" onClick={onAddCard} />
      </footer>
    </div>
  );
}
