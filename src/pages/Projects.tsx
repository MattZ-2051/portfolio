import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Projects</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Here are some of the projects I've been working on. Each one represents a unique challenge 
          and learning opportunity.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} — Built by John Doe
      </footer>
    </PortfolioLayout>
  );
};

export default Projects;
