export function TextField1({ onChange, value, type = "text", name, style, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      className={`px-3 py-2 border rounded-md ${style}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
