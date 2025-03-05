import { FiMoreHorizontal } from "react-icons/fi";
import Button from "./Button";

export default function DropdownMenu() {
  return (
    <Button type="ghost">
      <FiMoreHorizontal className="text-primary-200 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Button>
  );
}
