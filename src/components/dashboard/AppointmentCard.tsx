import React from "react";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AppointmentCardProps {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctor,
  specialty,
  date,
  time,
  location,
}) => {
  return (
    <Card className="health-card">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="space-y-1">
              <h3 className="font-semibold text-base sm:text-lg">{doctor}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{specialty}</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-green" />
                <span className="text-xs sm:text-sm">{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-green" />
                <span className="text-xs sm:text-sm">{time}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm mt-2 text-muted-foreground">{location}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="border-blue bg-white hover:bg-blue/90 hover:text-white text-blue w-full">Reschedule</Button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 w-full">Cancel</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
