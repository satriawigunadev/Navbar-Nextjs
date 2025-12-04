import Image from "next/image";

import { LogoProps } from "@/types/header/logoTypes";

const Logo: React.FC<LogoProps> = ({ imageUrl, companyName }) => {
  return (
    <a
      href="/"
      className="flex items-center hover:opacity-80 transition duration-300"
    >
      <div className="flex items-center gap-3 py-2">
        <Image
          src={imageUrl}
          alt={`${companyName} Logo`}
          width={80}
          height={40}
          priority
        />
        <span className="text-xl font-bold text-gray-800 tracking-wide hidden sm:inline">
          {companyName}
        </span>
      </div>
    </a>
  );
};

export default Logo;
