import React from "react";
import { Bell, Menu, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();
  const { translate } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 md:px-6">
        <div className="flex items-center flex-1">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 dark:bg-gray-800">
                <Sidebar />
              </SheetContent>
            </Sheet>
          ) : null}
          
          <div className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="XohAi Logo" 
              className="h-6 w-6 md:h-8 md:w-8"
              onError={(e) => {
                e.currentTarget.src = "https://placekitten.com/100/100";
                e.currentTarget.onerror = null;
              }} 
            />
            <h1 className="font-bold text-base md:text-lg lg:text-xl bg-gradient-to-r from-teal to-blue bg-clip-text text-transparent">
              {translate('app_name')}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher />
          
          <Button 
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="p-1.5 sm:p-2"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button variant="ghost" size="icon" className="p-1.5 sm:p-2">
            <User className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="p-1.5 sm:p-2 relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
