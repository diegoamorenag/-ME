import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { IExperience } from "../../types/types";

export const ExperienceComponent = ({
  exp,
  index,
}: {
  exp: IExperience;
  index: number;
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
            {exp.description.map((exp, i) => (
              <li key={i}>{exp}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};
