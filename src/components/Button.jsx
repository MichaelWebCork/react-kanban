export default function Button({
  label,
  type = "default",
  size = "default",
  ...props
}) {
  console.log(props.children);
  const buttonTypes = {
    default: "bg-primary-950 hover:bg-primary-800 text-primary-200",
    outline:
      "bg-primary-950 hover:bg-primary-900 text-primary-700 hover:text-primary-600 outline-2",
    ghost: "p-1",
  };
  const buttonSize = {
    default: "py-2 px-4 rounded-lg",
    small: "py-1 px-2 rounded-md text-sm",
  };
  return (
    <button
      className={`font-bold whitespace-nowrap outline-primary-900 cursor-pointer ${buttonTypes[type]} ${buttonSize[size]}`}
      {...props}
    >
      {props.children}
      {label}
    </button>
  );
}
