import { NAV_DATA } from "@/data/header/navData";
import { navProps } from "@/types/header/navTypes";
import Link from "next/link";

const Navbar = () => (
  <nav className="h-full hidden md:block">
    <ul className="flex items-center h-full gap-8">
      {NAV_DATA.map((item: navProps) => (
        <li
          key={item.id}
          className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium text-base"
        >
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
