import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, AtSign, Github } from "lucide-react";
import { Button } from "./Button";
import placeholder from "@/public/placeholder.png";
export function Hero() {
  return (
    <section className="py-16 flex flex-col justify-center items-end md:flex-row gap-8 w-full ">
      <div className=" aspect-square bg-secondary-100 dark:bg-secondary-500/10 rounded-lg ">
        <Image
          src={placeholder}
          alt="Abel Alebachew"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center gap-80">
        <div className="flex-1">
          <p className="text-lg mb-2">Hello! I am</p>
          <h1 className="text-primary text-4xl mb-4">Abel Alebachew</h1>
          <p className="max-w-xl text-lg mb-8">
            I&apos;m a UK-based software engineer passionate about creating
            impactful applications and following cutting-edge scientific
            research.
          </p>
          <div className="flex gap-4 mb-8">
            <Button>Download CV</Button>
            <Button variant="secondary">Contact me</Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 ">
          <Link
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <AtSign size={24} />
          </Link>
          <Link
            href="#"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Github size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
