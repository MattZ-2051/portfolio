import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, User, FolderOpen, FileText, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "@/assets/avatar.jpg";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/z-portfolio/", icon: Home },
  { label: "About", path: "/z-portfolio/about", icon: User },
  { label: "Projects", path: "/z-portfolio/projects", icon: FolderOpen },
  { label: "Contact", path: "/z-portfolio/contact", icon: Mail },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-border bg-sidebar px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={avatarImg}
            alt="Matt Zamora"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold text-foreground">
            Matt Zamora
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-accent"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[57px] z-40 border-b border-border bg-sidebar p-4"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
