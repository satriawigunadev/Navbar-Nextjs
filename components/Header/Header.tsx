"use client";
import Logo from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar";
import MobileMenu from "@/components/Header/MobileMenu";
import { LOGO_DATA } from "@/data/header/logoData";
import { useMobileMenu } from "@/hooks/header/useMobileMenu";
import { MobileMenuButton } from "./MobileMenuButton";

export function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className="border-b border-gray-100 shadow-sm sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 h-16">
        <Logo {...LOGO_DATA} />
        <Navbar />
        <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
      </div>
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </header>
  );
}
