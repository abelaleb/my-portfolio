import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/85 text-primary p-4 border-b  ">
      <div className=" mx-auto px-4 w-full max-w-[75rem]  ">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Abel Alebachew
          </Link>
          <div className="flex justify-center items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base hover:underline"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
