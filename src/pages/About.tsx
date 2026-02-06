import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";
import { aboutContent } from "@/data/portfolio";

const About = () => {
  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">About Me</h1>

        <div className="mt-8 space-y-4">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <section className="mt-16">
        <h2 className="mb-8 text-xl font-semibold text-foreground">
          Work Experience
        </h2>
        <div className="space-y-8">
          {aboutContent.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative border-l-2 border-border pl-6"
            >
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-foreground" />
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {exp.period}
              </p>
              <h3 className="mt-1 font-sans text-base font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} — Built by John Doe
      </footer>
    </PortfolioLayout>
  );
};

export default About;
