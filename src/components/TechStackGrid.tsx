import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";

const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {techStack.map((tech, i) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="flex items-center justify-center rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground shadow-sm transition-colors hover:bg-accent"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackGrid;
