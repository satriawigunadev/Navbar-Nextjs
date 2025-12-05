import { footerProps } from "@/types/footer/footerType";

export function Footer({ companyName, description }: footerProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center text-center">
          <span className="text-sm text-gray-600">
            &copy; {currentYear} {companyName} | {description}
          </span>
        </div>
      </div>
    </footer>
  );
}
