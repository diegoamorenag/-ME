import {
  AboutPage,
  ContactPage,
  EducationPage,
  ExperiencePage,
  Footer,
  HeroPage,
  Navbar,
  ProjectsPage,
  TechStackPage,
} from "./pages";

export const App = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Navbar />
      <main>
        <HeroPage />
        <AboutPage />
        <TechStackPage />
        <ProjectsPage />
        <EducationPage />
        <ExperiencePage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
};
