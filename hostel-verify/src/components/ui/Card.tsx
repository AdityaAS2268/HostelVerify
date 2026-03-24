type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-surface rounded-xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
