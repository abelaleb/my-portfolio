"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/data/";
import { useEffect, useState } from "react";
import { useInterval } from "@/hooks/use-interval";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";

export function Projects() {
  const [api, setApi] = useState<any>();
  const [count, setCount] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useInterval(
    () => {
      if (api && isPlaying && !isPaused) {
        api.scrollNext();
      }
    },
    isPlaying ? 3000 : null
  );

  return (
    <section id="projects" className="py-6 md:py-16">
      <motion.h2
        className="text-primary text-3xl text-center py-6 md:py-8 font-semibold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <Carousel
        setApi={setApi}
        className="p-0"
        onMouseLeave={() => {
          setIsPaused(false);
          setIsPlaying(true);
        }}
        onMouseEnter={() => setIsPlaying(false)}
        opts={{ loop: true }}
      >
        <CarouselContent className="m-0">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="basis-full sm:basis-1/2 lg:basis-1/4 px-4 sm:px-2 p-0"
            >
              <div className="bg-primary/10 rounded-xl p-6 h-full flex flex-col">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="400px"
                    quality={100}
                    className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.des}
                </p>

                <div className="flex gap-2 mb-4">
                  {project.iconLists.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon || "/placeholder.svg"}
                      alt="Tech Icon"
                      width={28}
                      height={28}
                      className="w-7 h-7 bg-white/20 p-1 rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                    />
                  ))}
                </div>

                <div className="flex gap-3 mt-auto text-[12px]">
                  {project.githublink && (
                    <motion.a
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 text-primary hover:text-white bg-primary/20 hover:bg-primary px-2 py-1 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-white bg-primary/20 hover:bg-primary px-2 py-1 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link className="w-5 h-5" />
                      Live Site
                    </motion.a>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`cursor-pointer w-3 h-3 rounded-full hover:bg-primary transition-colors ${
                  index === current ? "bg-primary" : "bg-card"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
