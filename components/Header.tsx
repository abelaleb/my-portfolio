import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Contact Me", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onContact, setOnContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const contactSection = document.getElementById("contact");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnContact(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (contactSection) observer.observe(contactSection);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full sticky top-0 z-100 bg-background/85 text-primary p-4 border-b transition-all duration-300 ${
        scrolled ? "py-2 shadow-md " : "py-4"
      } ${onContact ? "bg-primary border-none shadow-none text-white" : ""}  `}
    >
      <div className=" mx-auto px-4 w-full max-w-[75rem]  ">
        <nav className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="text-[22px] font-semibold lg:text-[28px] md:font-bold pt-1"
            >
              Abel Alebachew
            </Link>
          </motion.div>
          <div className="hidden justify-center items-center space-x-4 md:flex">
            <div className="flex md:space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm border-b-2 border-transparent text-foreground hover:border-primary/80 pt-1 hover:p-0 hover:text-primary dark:hover:border-secondary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 ">
            <Link
              href="#contact"
              className="text-sm pt-1 hover:p-0 border-b-2 border-transparent  hover:border-primary/80 "
            >
              Contact me
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
