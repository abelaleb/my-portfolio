import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
  details: string[];
}

const experiences: TimelineItem[] = [
  {
    title: "AI Research and Development Intern",
    date: "2025",
    description: `AI R&D Intern at iCog Labs, focused on deep learning optimization and biomedical data processing.`,
    details: [
      "Tuned and optimized deep neural networks for improved performance",
      "Worked on semantic parsing and graph-based biomedical projects",
      "Developed ML models using Python, PyTorch, and Scikit-learn",
      "Collaborated with AI teams on research-driven platforms",
    ],
  },
  {
    title: "Freelance Web Developer",
    date: "2025",
    description: `Freelance Web Developer worked on user-friendly web-applications, from concept to deployment, ensuring seamless user experiences.`,
    details: [
      "Created UI components using React, Tailwind CSS, and TypeScript",
      "Developed responsive web applications using React and Next.js",
      "Assisted in troubleshooting and bug fixing",
    ],
  },
  {
    title: "Open-source contributor as Front-end dev",
    date: "2024",
    description: `Versewise, an open-source project ai chatbot with a focus on user-friendly front-end development using React, HTML, CSS, and Tailwind CSS.`,
    details: ["Implemented an oAuth on the client side for improved UI/UX"],
  },
];

// Variants for the container to stagger children animations
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each timeline item
const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Timeline() {
  return (
    <section id="experience" className="px-4 py-6 md:py-16">
      <h2 className="text-primary text-3xl my-4 font-semibold text-center">
        My Experience
      </h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>

        {/* Container with staggered children */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 mb-8"
            >
              <motion.div
                className="bg-secondary-100 dark:bg-secondary-500/10 rounded-lg p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-75 mb-4">{item.date}</p>
                <p className="mb-4">{item.description}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {item.details.map((detail, i) => (
                    <motion.li key={i}>{detail}</motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
