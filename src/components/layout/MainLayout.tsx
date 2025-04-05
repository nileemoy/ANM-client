
import React from "react";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Header />
      <div className="flex flex-1">
        {!isMobile && <Sidebar />}
        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
