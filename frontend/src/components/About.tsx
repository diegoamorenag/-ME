import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Full-Stack Developer based in Montevideo, Uruguay, with a strong foundation in both frontend and backend technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey involves building robust applications using modern stacks like React, .NET, and Python. I have a keen interest in AI/LLMs and educational technology, always looking for ways to leverage technology to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Montevideo, Uruguay</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-muted-foreground">Computer Science (UDELAR)</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Interests</h3>
                  <p className="text-muted-foreground">AI/LLMs, Backend Systems, EdTech</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
