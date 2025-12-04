interface NavItemProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function NavItem({ label, onClick, className = "" }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`text-muted-foreground hover:text-foreground transition-colors ${className || "text-sm"}`}
    >
      {label}
    </button>
  );
}