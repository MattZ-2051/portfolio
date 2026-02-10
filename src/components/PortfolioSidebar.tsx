import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  FolderOpen,
  FileText,
  Mail,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import avatarImg from "@/assets/avatar.jpg";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/z-portfolio/", icon: Home },
  { label: "About", path: "/z-portfolio/about", icon: User },
  { label: "Projects", path: "/z-portfolio/projects", icon: FolderOpen },
  { label: "Contact", path: "/z-portfolio/contact", icon: Mail },
];

const socialItems = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matt-zamora-95b38316b/",
    icon: Linkedin,
  },
];

const PortfolioSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[var(--sidebar-width)] flex-col border-r border-sidebar-border bg-sidebar px-4 py-8 lg:flex">
      {/* Profile & Theme Toggle */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={avatarImg}
            alt="John Doe"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">Matt Zamora</p>
            <p className="text-xs text-muted-foreground">Developer</p>
          </div>
        </div>
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-lg bg-sidebar-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <item.icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Socials */}
      <div className="mt-8">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Socials
        </p>
        <div className="flex flex-col gap-1">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-auto">
        <a
          href="/z-portfolio/resume"
          className="group flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Read Resume
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
};

export default PortfolioSidebar;
