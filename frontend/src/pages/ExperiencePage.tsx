import { motion } from "framer-motion";
import { ExperienceComponent } from "../components/subcomponents/Experience";
import { IExperience } from "../types/types";

const experiences: IExperience[] = [
  {
    company: "Sinapsis Especialistas TI",
    companyUrl: "https://www.sinapsis.com.uy/",
    role: "Full-stack Developer",
    period: "2024 March - 2025 July",
    description: [
      "Web Banking portal adapted so that SMEs can access loans through BROU.NET, MVC Pattern.",
    ],
  },
  {
    company: "Intermedia / Sinapsis Especialistas TI",
    companyUrl: "https://intermediasoftware.com/",
    role: "Full-stack Developer",
    period: "2022 May - 2023 September",
    description: [
      "HCM (Human Capital Management) project where employees could access other employees' profiles, request leave, find out more about projects in which the company is involved, and employee assignments.",
      "Development of a web system with regulations for managing patients in hospitals in compliance with ADA (Americans with Disabilities Act) requirements. Direct contact with US customers in English. Frontend development using JavaScript, CSS, backend with .NET and Microsoft SQL Server.",
    ],
  },
];

export const ExperiencePage = () => {
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
            <ExperienceComponent index={index} key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
