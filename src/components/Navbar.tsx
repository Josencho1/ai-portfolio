import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { navigationItems } from "@/data/navigationItems";
import { personalInfo } from "@/data/personalInfo";
import NavItem from "./Navbar/NavItem";
import MobileNavItem from "./Navbar/MobileNavItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => handleNavigation("hero")}
            className="text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personalInfo.initials}
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                onClick={() => handleNavigation(item.id)}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2 flex flex-col gap-4"
          >
            {navigationItems.map((item) => (
              <MobileNavItem
                key={item.id}
                label={item.label}
                onClick={() => handleNavigation(item.id)}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}