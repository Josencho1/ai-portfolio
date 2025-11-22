interface MobileNavItemProps {
  label: string;
  onClick: () => void;
}

export default function MobileNavItem({ label, onClick }: MobileNavItemProps) {
  return (
    <button
      onClick={onClick}
      className="text-left text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </button>
  );
}
