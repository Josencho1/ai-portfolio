interface NavItemProps {
  label: string;
  onClick: () => void;
}

export default function NavItem({ label, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </button>
  );
}
