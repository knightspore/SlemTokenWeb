export default function Input({ type, name, id, required, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      className="rounded-lg border-2 border-purple-300 bg-purple-200 placeholder-purple-300 text-purple-900"
    />
  );
}
