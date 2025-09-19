import { motion } from "framer-motion";
import Link from "next/link";

export function NavItem({
  href,
  label,
  isActive,
  onHover,
  onLeave,
  isHovered,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium flex items-center text-neutral-500 transition-colors`}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <motion.span
          animate={isHovered && !isActive ? { y: -2 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {label}
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-500"
            layoutId="navbar-underline"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </li>
  );
}
