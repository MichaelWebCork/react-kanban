import { FiMoreHorizontal, FiX } from "react-icons/fi";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

export default function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", onClickOutside);
    }
    if (!open) {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button type="ghost" onClick={() => setOpen(!open)}>
        {open ? (
          <FiX className="text-primary-200" />
        ) : (
          <FiMoreHorizontal className="text-primary-200" />
        )}
      </Button>
      {open && (
        <div className="absolute right-0 w-48 bg-primary-800 shadow-lg rounded-lg p-2 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
}
