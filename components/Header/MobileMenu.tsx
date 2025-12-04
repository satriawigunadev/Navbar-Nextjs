"use client";
import Link from "next/link";
import { NAV_DATA } from "@/data/header/navData";
import { navProps } from "@/types/header/navTypes";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`
        fixed top-16 left-0 h-full w-full bg-white transition-transform duration-300 ease-in-out z-40 md:hidden border-t
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        
      `}
    >
      <nav className="p-4 pt-2">
        <ul className="flex flex-col gap-1">
          {NAV_DATA.map((item: navProps) => (
            <li
              key={item.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <Link
                href={item.url}
                className="block py-3 px-2 text-lg font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition duration-150 rounded-md"
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
