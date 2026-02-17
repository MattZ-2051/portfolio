import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import ProjectCard from "@/components/ProjectCard";
import TechStackGrid from "@/components/TechStackGrid";
import { profile, homeProjects } from "@/data/portfolio";

const Index = () => {
  return (
    <PortfolioLayout>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Hey there! I'm Matt
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {profile.bio}
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {profile.description}
        </p>
      </motion.div>

      {/* Projects Section */}
      <section className="mt-16">
        <h2 className="mb-8 text-xl font-semibold text-foreground">
          What I've been working on
        </h2>
        <div className="flex flex-col gap-8">
          {homeProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-16">
        <h2 className="mb-6 text-xl font-semibold text-foreground">
          Tech Stack
        </h2>
        <TechStackGrid />
      </section>
    </PortfolioLayout>
  );
};

export default Index;
