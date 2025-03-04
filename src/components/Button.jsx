export default function Button({ label, type = "default", ...props }) {
  const buttonTypes = {
    default: "bg-primary-950 hover:bg-primary-800 text-primary-200",
    outline:
      "bg-primary-950 hover:bg-primary-900 text-primary-700 hover:text-primary-600 outline-2",
  };
  return (
    <button
      className={`font-bold py-2 px-4 rounded-lg whitespace-nowrap outline-primary-900 cursor-pointer ${buttonTypes[type]}`}
      {...props}
    >
      {label}
    </button>
  );
}
