import { Menu } from "lucide-react";

export function MenuButton({ method }) {
  return (
    <button
      onClick={() => method((prev) => !prev)}
      className="bg-white rounded-md border border-gray-300 mx-2 p-1 text-gray-800 cursor-pointer hover:bg-gray-100"
    >
      <Menu size={20} />
    </button>
  );
}

export function PrimaryButton({ onClick, label, style, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-fit bg-[var(--primary-color)] text-white py-2 rounded-md hover:bg-[var(--primary-hover-color)] transition-colors duration-200 ${style} ${
        disabled ? "opacity-50 cursor-progress" : ""
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export function ButtonComponent({ onClick, label, style, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-fit px-3 py-2 transition-colors duration-200 ${style} ${
        disabled ? "opacity-50 cursor-progress" : ""
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
