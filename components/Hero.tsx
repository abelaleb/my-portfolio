"use client";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./Button";
import portrait from "@/public/portrait0.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
export function Hero() {
  const { theme } = useTheme();
  return (
    <section className=" px-4 py-6 md:py-16 flex justify-center items-center md:flex-row gap-8 w-full ">
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="aspect-square dark:bg-white/10 rounded-lg backdrop-blur-sm  rounded-b-lg overflow-hidden md:w-[300px] md:h-[300px] w-[250px] h-[250px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={portrait}
            alt="Abel Alebachew"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />{" "}
        </motion.div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-end lg:h-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-2 inline"
            >
              Hello! I am{" "}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:text-primary text-white text-2xl md:text-3xl md:mb-0 mb-2"
            >
              Abel Alebachew
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-xl text-lg mb-2 md:mb-8 "
            >
              I&apos;m a <span className="text-primary">web developer</span>{" "}
              based in Ethiopia. I Love Transforming Ideas into Interactive
              Digital Experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 mb-2"
            >
              <Link
                href="https://drive.google.com/file/d/1wnAAyCzibItDw8J0Leoo52zeHLPiGA8a/view?usp=sharing"
                target="_blank"
              >
                <Button>Get CV</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="secondary">Contact me</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-col gap-6 md:gap-8 lg:gap-10"
      >
        <Link
          href="https://github.com/abelaleb/"
          className="text-primary hover:text-primary/80 transition-colors hover:transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abel-alebachew-2b8420229/"
          className="text-primary transition-colors hover:transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </Link>
        <Link
          href="https://twitter.com/sometimesabel"
          className="text-primary hover:text-background transition-colors hover:transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter
            size={24}
            className="text-primary transition-colors hover:transform hover:scale-110"
          />
        </Link>
        <Link
          href="https://t.me/abel_aleb"
          className="text-primary  transition-colors hover:transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send size={24} />
        </Link>
        <Link
          href="https://wa.me/+251904342947"
          className="transition-colors hover:transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={theme === "dark" ? "/whatsappdark.svg" : "/whatsapplight.svg"}
            alt="WhatsApp icon"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </Link>
      </motion.div>
    </section>
  );
}
