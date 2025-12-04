"use client";
import Logo from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar";
import MobileMenu from "@/components/Header/MobileMenu";
import { LOGO_DATA } from "@/data/header/logoData";
import { useMobileMenu } from "@/hooks/header/useMobileMenu";
import { useClickOutside } from "@/hooks/header/useClickOutside";
import { HiMenu, HiX } from "react-icons/hi";
import { useRef, useCallback } from "react";

export function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const headerRef = useRef<HTMLElement>(null);

  const clickOutsideHandler = useCallback(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [isOpen, closeMenu]);

  useClickOutside(headerRef, clickOutsideHandler);

  return (
    <header className="border-b border-gray-100 shadow-sm sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 h-16">
        <Logo {...LOGO_DATA} />
        <Navbar />
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}
