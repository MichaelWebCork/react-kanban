export default function Button({ label, type = "default", ...props }) {
  console.log(props.children);
  const buttonTypes = {
    default: "py-2 px-4 bg-primary-950 hover:bg-primary-800 text-primary-200",
    outline:
      "py-2 px-4 bg-primary-950 hover:bg-primary-900 text-primary-700 hover:text-primary-600 outline-2",
    ghost: "p-1",
  };
  return (
    <button
      className={`font-bold rounded-lg whitespace-nowrap outline-primary-900 cursor-pointer ${buttonTypes[type]}`}
      {...props}
    >
      {props.children}
      {label}
    </button>
  );
}
