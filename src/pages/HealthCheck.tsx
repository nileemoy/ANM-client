import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import AnemiaPrediction from "@/components/health/AnemiaPrediction";
import DietRecommendation from "@/components/health/DietRecommendation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Mic, User } from "lucide-react";

const HealthCheck = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6 bg-[url('/path/to/village-scene.svg')] bg-cover relative">
        <div className="absolute top-4 right-4">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold animate-bounce">स्वास्थ्य जांच</h1>
          <p className="text-muted-foreground">
            Check your health status and get personalized recommendations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <AnemiaPrediction />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  Pregnancy Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">
                    This feature is available for ANM users only. Please contact your local ANM for a pregnancy risk assessment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <DietRecommendation />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-green" />
                  Health Activity Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-medium">Daily Water Intake</h3>
                    <div className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-blue rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm">
                      <span>0L</span>
                      <span className="font-medium">1.3L / 2L</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-medium">Iron-rich Foods Consumed</h3>
                    <div className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-green rounded-full" style={{ width: "40%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm">
                      <span>0</span>
                      <span className="font-medium">2 / 5</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="font-medium">Physical Activity</h3>
                    <div className="h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-lime rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm">
                      <span>0 min</span>
                      <span className="font-medium">10 / 30 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="fixed bottom-4 right-4 animate-pulse">
          <Mic className="h-10 w-10 text-primary" />
        </div>
      </div>
    </MainLayout>
  );
};

export default HealthCheck;
