import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
];

export function Skills() {
  return (
    <section className="px-4 py-6 md:py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-primary text-3xl mb-6 font-semibold"
      >
        Skills
      </motion.h2>
      <div className="flex justify-center gap-2 flex-wrap items-center w-[70%] mx-auto">
        {skills.map((skill) => (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            key={skill}
            className="bg-primary/20 dark:bg-accent/10 px-8 py-2 text-black dark:text-white rounded-full text-[10px] md:text-lg"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
