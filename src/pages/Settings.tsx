
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Lock, Globe, Moon, Volume2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, translate } = useLanguage();
  const [notifications, setNotifications] = React.useState(true);
  const [voiceAssistant, setVoiceAssistant] = React.useState(true);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
    toast.success(`Language changed to ${value === "en" ? "English" : value === "hi" ? "Hindi" : value === "as" ? "Assamese" : "Bengali"}`);
  };

  return (
    <MainLayout>
      <div className="container py-8 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6">{translate("settings")}</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5 text-green" /> {translate("notifications")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{translate("notifications")}</p>
                    <p className="text-sm text-gray-500">Receive alerts for appointments and health tips</p>
                  </div>
                  <Switch 
                    checked={notifications} 
                    onCheckedChange={setNotifications} 
                    className="bg-green data-[state=checked]:bg-green"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Health Reminders</p>
                    <p className="text-sm text-gray-500">Get reminders for medicine and health check-ups</p>
                  </div>
                  <Switch 
                    checked={true}
                    className="bg-green data-[state=checked]:bg-green"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-green" /> {translate("language")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">App Language</p>
                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-full sm:w-72">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="as">অসমীয়া (Assamese)</SelectItem>
                      <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Volume2 className="mr-2 h-5 w-5 text-green" /> {translate("voice_assistant")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Voice Assistant</p>
                    <p className="text-sm text-gray-500">Use voice commands to navigate the app</p>
                  </div>
                  <Switch 
                    checked={voiceAssistant} 
                    onCheckedChange={setVoiceAssistant} 
                    className="bg-green data-[state=checked]:bg-green"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="mr-2 h-5 w-5 text-green" /> {translate("appearance")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{translate("dark_mode")}</p>
                    <p className="text-sm text-gray-500">Enable dark theme for the app</p>
                  </div>
                  <Switch 
                    checked={theme === "dark"} 
                    onCheckedChange={toggleTheme} 
                    className="bg-green data-[state=checked]:bg-green"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-green" /> {translate("privacy")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full sm:w-auto">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Delete My Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
