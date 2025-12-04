import { motion } from "framer-motion";
import { ExperienceComponent } from "../components/subcomponents/Experience";
import { IExperience } from "../types/types";

const experiences: IExperience[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: [
      "Developed and maintained scalable web applications using React and .NET.",
      "Implemented CI/CD pipelines using Docker and GitHub Actions.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
    ],
  },
  {
    company: "Digital Innovations",
    role: "Junior Developer",
    period: "2021 - 2023",
    description: [
      "Assisted in the development of frontend components using React.",
      "Participated in code reviews and agile ceremonies.",
      "Optimized database queries for improved performance.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceComponent index={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
