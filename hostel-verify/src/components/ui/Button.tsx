type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 rounded-lg font-medium transition 
        ${
          disabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
    >
      {children}
    </button>
  );
}
