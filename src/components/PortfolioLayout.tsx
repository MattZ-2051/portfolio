import { ReactNode } from "react";
import PortfolioSidebar from "./PortfolioSidebar";
import MobileNav from "./MobileNav";

interface PortfolioLayoutProps {
  children: ReactNode;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioSidebar />
      <MobileNav />
      <main className="min-h-screen pt-[57px] lg:ml-[var(--sidebar-width)] lg:pt-0">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PortfolioLayout;
