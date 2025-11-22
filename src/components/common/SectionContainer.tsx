import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export default function SectionContainer({
  id,
  children,
  className = "",
  threshold = 0.2,
}: SectionContainerProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 py-32 ${className}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
