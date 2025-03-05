const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nestjs",
  "Django",
  "Strapi",
];

export function Skills() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-primary text-3xl mb-8">Skills</h2>
      <div className="flex justify-center gap-3 flex-wrap w-[75%] mx-auto">
        {skills.map((skill) => (
          <span key={skill} className="bg-accent dark:bg-accent/10 px-8 py-2 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
