import { useEffect } from "react";
import { useCardStore, useListStore } from "../store";
import Button from "./Button";
import Card from "./Card";

export default function List({ id, title }) {
  const { addCard } = useCardStore();
  const cards = useCardStore((state) => state.cards[id]);
  const onAddCard = () => {
    addCard(id);
  };
  return (
    <div className="bg-primary-950 min-w-96 min-h-44 rounded-lg py-4 px-2 flex flex-col gap-4">
      <header>
        <h2
          className="text-primary-200 font-bold"
          contentEditable="plaintext-only"
          suppressContentEditableWarning={true}
        >
          {title}
        </h2>
      </header>
      {cards?.length &&
        cards.map((card) => <Card key={card.id} text={card.text} />)}
      <footer className="flex flex-col">
        <Button type="outline" label="Add card" onClick={onAddCard} />
      </footer>
    </div>
  );
}
