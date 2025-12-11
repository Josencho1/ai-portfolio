interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
