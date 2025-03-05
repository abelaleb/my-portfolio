import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { projects } from "@/data/";
import placeholder from "@/public/placeholder.png";
export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-primary text-3xl text-center mb-4">My projects</h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        As a Software Engineer in healthcare, I&apos;ve faced many challenges
        and triumphs. Here are key projects that shaped my skills:
      </p>
      <Carousel className="p-0">
        <CarouselContent className="m-0">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <div className="bg-secondary-100 dark:bg-secondary-500/10 rounded-lg p-4 h-full bg-[#F8E5D5] dark:bg-[#1A202C]">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={placeholder}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
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
        {/* <div className="flex justify-center mt-8 gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div> */}
      </Carousel>
    </section>
  );
}
