
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const healthTips = [
  "Remember to drink 8 glasses of water daily for optimal hydration",
  "Include local green leafy vegetables in your diet to boost iron intake",
  "Regular health check-ups are important for early detection of anemia",
  "Pregnant women should take iron supplements as prescribed by their ANM",
  "Include vitamin C-rich foods to improve iron absorption from food"
];

const HealthTips = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Info className="mr-2 h-5 w-5 text-blue" />
          Daily Health Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {healthTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-lime rounded-full h-5 w-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">
                {index + 1}
              </span>
              <p className="text-sm">{tip}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default HealthTips;
