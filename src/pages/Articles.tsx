import { motion } from "framer-motion";
import PortfolioLayout from "@/components/PortfolioLayout";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "A deep dive into architectural patterns that help React apps scale gracefully as complexity grows.",
    date: "Jan 2026",
  },
  {
    title: "The Art of Performance Optimization",
    excerpt: "Learn techniques to make your web applications blazingly fast with practical tips and real-world examples.",
    date: "Dec 2025",
  },
  {
    title: "Why TypeScript Changed How I Code",
    excerpt: "My journey from JavaScript to TypeScript and why I'll never go back.",
    date: "Nov 2025",
  },
];

const Articles = () => {
  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Articles</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I write about web development, software engineering, and lessons learned along the way.
        </p>
      </motion.div>

      <div className="mt-12 space-y-6">
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href="#"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {article.date}
            </p>
            <h3 className="mt-2 font-sans text-base font-semibold text-card-foreground group-hover:text-accent-foreground transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </motion.a>
        ))}
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} — Built by John Doe
      </footer>
    </PortfolioLayout>
  );
};

export default Articles;
