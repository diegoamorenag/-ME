import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Full Stack Developer',
    period: '2023 - Present',
    description: [
      'Developed and maintained scalable web applications using React and .NET.',
      'Implemented CI/CD pipelines using Docker and GitHub Actions.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
    ],
  },
  {
    company: 'Digital Innovations',
    role: 'Junior Developer',
    period: '2021 - 2023',
    description: [
      'Assisted in the development of frontend components using React.',
      'Participated in code reviews and agile ceremonies.',
      'Optimized database queries for improved performance.',
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
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full mt-1">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-20">
                  <ul className="list-disc space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};