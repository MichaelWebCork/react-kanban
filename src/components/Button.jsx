export default function Button({label, ...props}) {
  return (
    <button className="bg-primary-950 hover:bg-primary-800 text-primary-50 font-bold py-2 px-4 rounded-lg whitespace-nowrap" {...props}>
      { label }
    </button>
  )
}