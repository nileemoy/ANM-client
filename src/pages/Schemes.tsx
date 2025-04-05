
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import SchemeChecker from "@/components/schemes/SchemeChecker";
import SchemeCard from "@/components/dashboard/SchemeCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText } from "lucide-react";

const Schemes = () => {
  const popularSchemes = [
    {
      title: "आयुष्मान भारत योजना (Ayushman Bharat)",
      description: "Comprehensive health insurance for poor and vulnerable families",
      eligibility: "Based on deprivation criteria as per SECC data",
      benefits: "Coverage up to ₹5 lakh per family per year for secondary and tertiary care"
    },
    {
      title: "प्रधानमंत्री मातृ वंदना योजना (PM Matru Vandana Yojana)",
      description: "Maternity benefit program for pregnant and lactating women",
      eligibility: "Pregnant women and lactating mothers (for first child only)",
      benefits: "Cash incentive of ₹5,000 in three installments"
    },
    {
      title: "जननी शिशु सुरक्षा कार्यक्रम (Janani Shishu Suraksha Karyakram)",
      description: "Free healthcare for pregnant women and sick newborns",
      eligibility: "All pregnant women and sick newborns",
      benefits: "Free delivery, C-section, drugs, diagnostics, and transport"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">स्वास्थ्य योजनाएं</h1>
          <p className="text-muted-foreground">
            Check eligibility for government health schemes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <SchemeChecker />
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue" />
                  Popular Health Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {popularSchemes.map((scheme, index) => (
                    <SchemeCard 
                      key={index}
                      title={scheme.title}
                      description={scheme.description}
                      eligibility={scheme.eligibility}
                      benefits={scheme.benefits}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-blue" />
                  Search All Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <input 
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 pl-10"
                    placeholder="Search by scheme name, category, or eligibility..."
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="mt-4">
                  <p className="text-center text-muted-foreground py-8">
                    Enter a search term to find specific health schemes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Schemes;
