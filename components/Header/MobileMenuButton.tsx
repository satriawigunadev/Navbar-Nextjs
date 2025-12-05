import { HiMenu, HiX } from "react-icons/hi";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
    >
      {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
    </button>
  );
}
