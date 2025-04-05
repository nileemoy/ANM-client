import React from "react";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SchemeCardProps {
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
}

const SchemeCard: React.FC<SchemeCardProps> = ({
  title,
  description,
  eligibility,
  benefits,
}) => {
  return (
    <Card className="health-card overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-bright to-green"></div>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="bg-lime/20 p-2 rounded-lg mr-3 mb-3 sm:mb-0">
            <FileText className="h-5 w-5 text-green" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{description}</p>
            
            <div className="mt-3">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground">Eligibility</h4>
              <p className="text-xs sm:text-sm mt-1">{eligibility}</p>
            </div>
            
            <div className="mt-2">
              <h4 className="text-xs font-semibold uppercase text-muted-foreground">Benefits</h4>
              <p className="text-xs sm:text-sm mt-1">{benefits}</p>
            </div>
            
            <Button className="mt-4 w-full bg-blue hover:bg-blue/90 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;
