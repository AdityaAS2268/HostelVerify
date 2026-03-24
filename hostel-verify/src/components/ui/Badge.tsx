export default function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "success" | "danger" | "default";
}) {
  const base = "px-3 py-1 text-sm rounded-full font-medium";

  const styles = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    default: "bg-gray-100 text-gray-700",
  };

  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}
