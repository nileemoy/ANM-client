
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Activity, Droplet } from "lucide-react";

const HealthSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-l-4 border-l-bright animate-fade-in">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
            <Heart className="mr-2 h-4 w-4 text-red-500" />
            Heart Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">72 BPM</div>
          <p className="text-xs text-muted-foreground mt-1">Normal range</p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
            <Droplet className="mr-2 h-4 w-4 text-blue" />
            Hemoglobin
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12.5 g/dL</div>
          <p className="text-xs text-muted-foreground mt-1">Normal range</p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-teal animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
            <Activity className="mr-2 h-4 w-4 text-green" />
            BP
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">120/80</div>
          <p className="text-xs text-muted-foreground mt-1">Normal range</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthSummary;
