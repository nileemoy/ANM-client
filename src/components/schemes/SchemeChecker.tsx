
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SchemeChecker = () => {
  const [age, setAge] = useState("");
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [pregnant, setPregnant] = useState("");
  const [results, setResults] = useState<{name: string, eligibility: string}[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const eligibleSchemes = [];
      
      // Logic to determine eligible schemes based on input
      const ageNum = parseInt(age);
      
      if (gender === "female" && pregnant === "yes") {
        eligibleSchemes.push({
          name: "जननी सुरक्षा योजना (Janani Suraksha Yojana)",
          eligibility: "Eligible - Pregnant women are covered under this scheme"
        });
      }
      
      if (ageNum < 18) {
        eligibleSchemes.push({
          name: "बाल स्वास्थ्य कार्यक्रम (Child Health Program)",
          eligibility: "Eligible - For children under 18 years"
        });
      }
      
      if (income === "below_poverty_line") {
        eligibleSchemes.push({
          name: "आयुष्मान भारत योजना (Ayushman Bharat)",
          eligibility: "Eligible - BPL families are covered under this scheme"
        });
      }
      
      if (category === "sc_st") {
        eligibleSchemes.push({
          name: "अनुसूचित जाति/जनजाति स्वास्थ्य योजना (SC/ST Health Scheme)",
          eligibility: "Eligible - For SC/ST category members"
        });
      }
      
      setResults(eligibleSchemes);
      setIsChecking(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Search className="mr-2 h-5 w-5 text-blue" />
          Scheme Eligibility Checker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
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
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {gender === "female" && (
              <div className="grid gap-2">
                <Label>Are you pregnant?</Label>
                <RadioGroup value={pregnant} onValueChange={setPregnant}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="pregnant-yes" />
                    <Label htmlFor="pregnant-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="pregnant-no" />
                    <Label htmlFor="pregnant-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            
            <div className="grid gap-2">
              <Label htmlFor="income">Income Category</Label>
              <Select value={income} onValueChange={setIncome} required>
                <SelectTrigger id="income">
                  <SelectValue placeholder="Select income category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below_poverty_line">Below Poverty Line</SelectItem>
                  <SelectItem value="low_income">Low Income</SelectItem>
                  <SelectItem value="middle_income">Middle Income</SelectItem>
                  <SelectItem value="high_income">High Income</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="obc">OBC</SelectItem>
                  <SelectItem value="sc_st">SC/ST</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="bg-blue hover:bg-blue/90" disabled={isChecking}>
              {isChecking ? "Checking Eligibility..." : "Check Eligibility"}
            </Button>
          </div>
        </form>
        
        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="font-medium mb-3">Eligible Schemes:</h3>
            <div className="space-y-3">
              {results.map((scheme, index) => (
                <div key={index} className="bg-green/10 p-3 rounded-md border border-green/30">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">{scheme.name}</p>
                      <p className="text-sm text-green mt-1">{scheme.eligibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SchemeChecker;
