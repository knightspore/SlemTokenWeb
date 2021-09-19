export default function Input({
  type,
  name,
  id,
  required,
  placeholder,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      className="text-purple-900 placeholder-purple-300 bg-purple-200 border-2 border-purple-300 rounded-lg"
      onChange={onChange}
    />
  );
}
