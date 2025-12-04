import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { Experience } from "../../types/types";

export const ExperienceComponent = ({ item }: { item: Experience }) => {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: item.id * 0.1 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-full mt-1">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{item.role}</CardTitle>
                <p className="text-primary font-medium">{item.company}</p>
              </div>
              <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium whitespace-nowrap ml-4">
                {item.period}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pl-20">
          <ul className="list-disc space-y-2 text-muted-foreground">
            {item.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};
