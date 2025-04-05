
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AnemiaPrediction = () => {
  const [hemoglobin, setHemoglobin] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [riskLevel, setRiskLevel] = useState<"normal" | "low" | "moderate" | "high" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple prediction algorithm
    const hb = parseFloat(hemoglobin);
    const ageVal = parseInt(age);
    
    if (gender === "female") {
      if (hb < 8) {
        setRiskLevel("high");
        setResult("Severe Anemia Detected. Please consult a healthcare provider immediately.");
      } else if (hb < 10) {
        setRiskLevel("moderate");
        setResult("Moderate Anemia Detected. Consider iron supplements and dietary changes.");
      } else if (hb < 12) {
        setRiskLevel("low");
        setResult("Mild Anemia Detected. Monitor your diet and iron intake.");
      } else {
        setRiskLevel("normal");
        setResult("Normal Hemoglobin Levels. No anemia detected.");
      }
    } else {
      if (hb < 10) {
        setRiskLevel("high");
        setResult("Severe Anemia Detected. Please consult a healthcare provider immediately.");
      } else if (hb < 12) {
        setRiskLevel("moderate");
        setResult("Moderate Anemia Detected. Consider iron supplements and dietary changes.");
      } else if (hb < 13) {
        setRiskLevel("low");
        setResult("Mild Anemia Detected. Monitor your diet and iron intake.");
      } else {
        setRiskLevel("normal");
        setResult("Normal Hemoglobin Levels. No anemia detected.");
      }
    }
  };

  const getResultColor = () => {
    switch(riskLevel) {
      case "high": return "bg-red-50 border-red-200 text-red-800";
      case "moderate": return "bg-orange-50 border-orange-200 text-orange-800";
      case "low": return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "normal": return "bg-green-50 border-green-200 text-green-800";
      default: return "";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Droplet className="mr-2 h-5 w-5 text-red-500" />
          Anemia Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="hemoglobin">Hemoglobin Level (g/dL)</Label>
              <Input
                id="hemoglobin"
                type="number"
                step="0.1"
                value={hemoglobin}
                onChange={(e) => setHemoglobin(e.target.value)}
                required
                placeholder="12.5"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                placeholder="25"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={gender} onValueChange={setGender} required>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="bg-blue hover:bg-blue/90 mt-2">
              Check Anemia Risk
            </Button>
          </div>
        </form>
        
        {result && (
          <div className={`mt-4 p-3 rounded-md border ${getResultColor()}`}>
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">{result}</p>
                {riskLevel !== "normal" && (
                  <p className="text-sm mt-1">
                    Please consult with your ANM for more detailed assessment and personalized advice.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnemiaPrediction;
