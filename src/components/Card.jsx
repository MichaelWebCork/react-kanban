import Button from "./Button";
import DropdownMenu from "./DropdownMenu";

export default function Card({ listId, id, text }) {
  return (
    <div className="min-h-32 outline-primary-900 outline-2 rounded-lg p-4 flex flex-col gap-2 group">
      <header className="flex items-center justify-between">
        <h3
          className="text-primary-200 font-bold"
          contentEditable="plaintext-only"
          suppressContentEditableWarning={true}
        >
          Card Title
        </h3>
        <DropdownMenu>
          <Button size="small">Delete</Button>
        </DropdownMenu>
      </header>
      <p
        className="text-primary-200"
        contentEditable="plaintext-only"
        suppressContentEditableWarning={true}
      >
        {text}
      </p>
    </div>
  );
}
