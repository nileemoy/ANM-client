import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HealthSummary from "@/components/dashboard/HealthSummary";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import HealthTips from "@/components/dashboard/HealthTips";
import VoiceAssistant from "@/components/voice/VoiceAssistant";
import SchemeCard from "@/components/dashboard/SchemeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, FileText, Calendar, User } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl font-bold">Hey, Welcome 👋</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Welcome to your health dashboard
          </p>
        </div>
        
        <div className="mb-4">
          <HealthSummary />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="flex flex-wrap justify-start gap-2 w-full overflow-x-auto pb-2">
                <TabsTrigger value="appointments" className="flex items-center gap-1 min-w-[120px] sm:min-w-[100px]">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  Appointments
                </TabsTrigger>
                <TabsTrigger value="schemes" className="flex items-center gap-1 min-w-[120px] sm:min-w-[100px]">
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                  Schemes
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-1 min-w-[120px] sm:min-w-[100px]">
                  <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex items-center gap-1 min-w-[120px] sm:min-w-[100px]">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  Profile
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="appointments" className="space-y-4">
                <AppointmentCard 
                  doctor="Dr. Priya Sharma"
                  specialty="General Physician"
                  date="April 15, 2024"
                  time="10:30 AM"
                  location="PHC Chandpur, Block B"
                />
                <AppointmentCard 
                  doctor="Dr. Amit Kumar"
                  specialty="Gynecologist"
                  date="April 22, 2024"
                  time="2:00 PM"
                  location="District Hospital, Ward 3"
                />
              </TabsContent>
              
              <TabsContent value="schemes" className="space-y-4">
                <SchemeCard 
                  title="जननी सुरक्षा योजना (Janani Suraksha Yojana)"
                  description="Promotes institutional deliveries through financial assistance"
                  eligibility="Pregnant women from BPL households"
                  benefits="₹1400 for institutional delivery, free treatment, and medications"
                />
                <SchemeCard 
                  title="आयुष्मान भारत योजना (Ayushman Bharat)"
                  description="Comprehensive health insurance for poor and vulnerable families"
                  eligibility="Based on deprivation criteria as per SECC data"
                  benefits="Coverage up to ₹5 lakh per family per year for secondary and tertiary care"
                />
              </TabsContent>
              
              <TabsContent value="notifications">
                <div className="space-y-3">
                  <div className="bg-lime/10 p-3 rounded-md border border-lime/30">
                    <h3 className="font-medium text-sm">Upcoming appointment reminder</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your appointment with Dr. Priya Sharma is scheduled for tomorrow at 10:30 AM
                    </p>
                  </div>
                  <div className="bg-blue/10 p-3 rounded-md border border-blue/30">
                    <h3 className="font-medium text-sm">Medicine reminder</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Don't forget to take your iron supplements today
                    </p>
                  </div>
                  <div className="bg-teal/10 p-3 rounded-md border border-teal/30">
                    <h3 className="font-medium text-sm">New scheme available</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      You might be eligible for the new maternal health scheme
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="profile">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="bg-blue/20 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center text-blue text-xl sm:text-2xl font-bold">
                      RS
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold">राजेश सिंह</h2>
                      <p className="text-xs sm:text-sm text-muted-foreground">ID: ANM2023789</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs sm:text-sm flex flex-wrap gap-1">
                          <span className="w-20 text-muted-foreground">Age:</span> 35
                        </p>
                        <p className="text-xs sm:text-sm flex flex-wrap gap-1">
                          <span className="w-20 text-muted-foreground">Gender:</span> Male
                        </p>
                        <p className="text-xs sm:text-sm flex flex-wrap gap-1">
                          <span className="w-20 text-muted-foreground">Blood Type:</span> O+
                        </p>
                        <p className="text-xs sm:text-sm flex flex-wrap gap-1">
                          <span className="w-20 text-muted-foreground">Village:</span> Chandpur
                        </p>
                        <p className="text-xs sm:text-sm flex flex-wrap gap-1">
                          <span className="w-20 text-muted-foreground">Block:</span> Sivasagar
                        </p>
                        <p className="text-xs sm:text-sm flex flex-wrap gap-1">
                          <span className="w-20 text-muted-foreground">District:</span> Sivasagar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-4">
            <VoiceAssistant />
            <HealthTips />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
