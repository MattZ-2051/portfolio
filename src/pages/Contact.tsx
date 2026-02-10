import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Youtube } from "lucide-react";
import PortfolioLayout from "@/components/PortfolioLayout";

const contactLinks = [
  {
    label: "Email",
    value: "mzamora2899@gmail.com",
    href: "mailto:mzamora2899@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Matt Zamora",
    href: "https://www.linkedin.com/in/matt-zamora-95b38316b/",
    icon: Linkedin,
  },
];

const Contact = () => {
  return (
    <PortfolioLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Contact</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out through any of the channels
          below.
        </p>
      </motion.div>

      <div className="mt-12 space-y-4">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
              <link.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-card-foreground">
                {link.label}
              </p>
              <p className="text-sm text-muted-foreground">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </PortfolioLayout>
  );
};

export default Contact;
