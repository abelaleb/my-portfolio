interface TimelineItem {
  title: string
  date: string
  description: string
  details: string[]
}

const experiences: TimelineItem[] = [
  {
    title: "Software engineer in healthcare",
    date: "2024 - Present",
    description: "I am currently a software engineer in healthcare\nHealthcare\nGraduate Systems Analyst",
    details: [
      "Developing and maintaining complex applications across health organizations.",
      "Focusing on business intelligence solutions for finance staff.",
      "Also working on automations, Microsoft Power Apps, Qlik Sense, and Oracle applications.",
    ],
  },
  {
    title: "Software Developer",
    date: "2022 - 2024",
    description: "Full-stack developer working on web applications",
    details: [
      "Built responsive web applications using React and Node.js",
      "Implemented CI/CD pipelines for automated testing and deployment",
      "Collaborated with cross-functional teams to deliver features on time",
    ],
  },
  {
    title: "Junior Developer",
    date: "2020 - 2022",
    description: "Entry-level position focused on front-end development",
    details: [
      "Created UI components using HTML, CSS, and JavaScript",
      "Participated in code reviews and improved coding standards",
      "Assisted in troubleshooting and bug fixing",
    ],
  },
]

export function Timeline() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-primary text-3xl text-center mb-12">My Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
        {experiences.map((item, index) => (
          <div key={index} className="relative pl-8 mb-8">
            <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-[5px]"></div>
            <div className="bg-secondary-100 dark:bg-secondary-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm opacity-75 mb-4">{item.date}</p>
              <p className="mb-4">{item.description}</p>
              <ul className="list-disc pl-5 space-y-1">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

