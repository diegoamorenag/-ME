import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-space-grotesk">
              Diego Amorena
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/diegoamorenag"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/diegoamorena"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:amorenadiegog@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/59891036039"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
