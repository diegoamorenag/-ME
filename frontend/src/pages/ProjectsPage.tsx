import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Software Engineering Project - CEMAU",
    description:
      "Semester-long development project designing and developing video games for CEMAU, an organization supporting adults with learning difficulties. Implemented a statistics system to monitor user progress with API and database using Ruby on Rails. Project carried out with monitoring and support from XMartlabs.",
    tags: ["Ruby on Rails", "Video Games", "API", "Database", "Statistics"],
    links: {
      demo: "https://cemau.xmartlabs.com/",
      repo: "https://cemau.org/",
    },
  },
  {
    title: "Generative Artificial Intelligence - OpenFing Chat",
    description:
      "Conversational AI project based on Open Fing classes specializing in text generation. Integrates Retrieval-Augmented Generation (RAG) techniques for improved accuracy and relevance, LangChain for orchestration of conversational flows, and Whisper for automatic speech recognition (ASR). Implementation includes prompt engineering, model fine-tuning, optimization, and deployment in scalable environments with efficient computational resource management.",
    tags: [
      "RAG",
      "LangChain",
      "Whisper",
      "ASR",
      "Python",
      "LLM",
      "Prompt Engineering",
    ],
    links: {
      demo: "https://openfingchat.duckdns.org/",
      repo: "https://open.fing.edu.uy/",
    },
  },
];

export const ProjectsPage = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
