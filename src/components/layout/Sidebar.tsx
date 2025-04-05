import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Calendar, FileText, Search, Heart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Sidebar = () => {
  const { translate } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { 
      name: translate("home"), 
      icon: Home, 
      path: "/" 
    },
    { 
      name: translate("profile"), 
      icon: User, 
      path: "/profile" 
    },
    { 
      name: translate("records"), 
      icon: FileText, 
      path: "/records" 
    },
    { 
      name: translate("appointments"), 
      icon: Calendar, 
      path: "/appointments" 
    },
    { 
      name: translate("health_check"), 
      icon: Heart, 
      path: "/health-check" 
    },
    { 
      name: translate("schemes"), 
      icon: Search, 
      path: "/schemes" 
    },
    { 
      name: translate("settings"), 
      icon: Settings, 
      path: "/settings" 
    },
  ];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 h-full flex flex-col py-4 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex-1 px-2">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start font-normal hover:bg-teal/10 ${
                    location.pathname === item.path ? "bg-teal/10" : ""
                  }`}
                >
                  <item.icon className="mr-2 h-5 w-5 text-green" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 mt-6">
        <Button className="w-full bg-blue hover:bg-blue/90 text-white">
          <Heart className="mr-2 h-5 w-5" /> SOS Emergency
        </Button>
      </div>
    </aside>
  );
};
