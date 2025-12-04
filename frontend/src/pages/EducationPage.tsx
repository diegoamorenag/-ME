import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { GraduationCap } from "lucide-react";
import { EducationComponent } from "../components/subcomponents/EducationComponent";

const education = [
  {
    degree: "Computer Systems Analyst",
    institution: "Facultad de Ingeniería (UDELAR)",
    year: "2025",
    description: "Completed",
  },
  {
    degree: "Computer Science Degree",
    institution: "Facultad de Ingeniería (UDELAR)",
    year: "Expected July 2025",
    description: "In Progress",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EducationComponent item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
