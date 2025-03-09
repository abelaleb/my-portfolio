"use client" 
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/data/";
import { useEffect,  useState } from "react";
import { useInterval } from "@/hooks/use-interval";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Projects() {
  //eslint-disable-next-line
  const [api, setApi] = useState<any>();
  const [count, setCount] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  //eslint-disable-next-line
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // Set up the carousel API
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
        My projects
      </motion.h2>
      {/* <p className="text-start pl-10 md:pl-8 sm:pl-4 mb-12 max-w-2xl mx-auto">
        Some of my projects:
      </p> */}
      <Carousel
        setApi={setApi}
        className="p-0"
        // onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        opts={{ loop: true }}
      >
        <CarouselContent className="m-0">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="basis-full sm:basis-1/2 lg:basis-1/4 pl-4 pr-4 sm:pl-2 sm:pr-2 p-0"
            >
              <div className="bg-primary/10 rounded-lg p-4 h-full">
                <div className="aspect-video relative mb-4">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="100px"
                    className="object-cover rounded-lg "
                  />
                </div>
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.des}</p>
                <div className="flex gap-2">
                  {project.iconLists.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon || "/placeholder.svg"}
                      alt=""
                      width={24}
                      height={24}
                      
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <div className="flex gap-1">
            {Array.from({ length: count }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`cursor-pointer w-2 h-2 rounded-full hover:bg-primary ${
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
