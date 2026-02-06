import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";
import project1Img from "@/assets/project-1.png";
import project2Img from "@/assets/project-2.png";
import project3Img from "@/assets/project-3.png";
import project4Img from "@/assets/project-4.png";

const imageMap: Record<string, string> = {
  "project-1": project1Img,
  "project-2": project2Img,
  "project-3": project3Img,
  "project-4": project4Img,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col gap-4 rounded-xl sm:flex-row sm:gap-6"
    >
      {/* Thumbnail */}
      <div className="w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:w-44">
        <img
          src={imageMap[project.image]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center py-1">
        <h3 className="font-sans text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-tag px-2.5 py-1 text-xs font-medium text-tag-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
