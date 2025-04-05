
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import QRCodeScanner from "@/components/user/QRCodeScanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Calendar, Droplet, Activity, User } from "lucide-react";

const Records = () => {
  const medicalRecords = [
    {
      date: "March 15, 2024",
      doctor: "Dr. Priya Sharma",
      diagnosis: "Common Cold",
      notes: "Patient presented with runny nose, sore throat, and mild fever. Prescribed rest, fluids, and medication for symptom relief.",
      prescription: ["Paracetamol 500mg", "Chlorpheniramine 4mg", "Vitamin C 500mg"]
    },
    {
      date: "January 5, 2024",
      doctor: "Dr. Amit Kumar",
      diagnosis: "Mild Anemia",
      notes: "Hemoglobin levels slightly below normal. Recommended iron-rich diet and supplements.",
      prescription: ["Ferrous Sulfate 60mg", "Folic Acid 5mg"]
    },
    {
      date: "October 22, 2023",
      doctor: "Dr. Deepika Patel",
      diagnosis: "Annual Check-up",
      notes: "General health assessment. All parameters within normal range except slightly elevated blood pressure.",
      prescription: ["Regular exercise", "Low-salt diet", "Follow-up in 3 months"]
    }
  ];

  const vitalRecords = [
    {
      date: "April 1, 2024",
      bp: "120/80",
      heartRate: "72",
      hemoglobin: "12.5",
      weight: "65",
      notes: "Normal readings"
    },
    {
      date: "March 1, 2024",
      bp: "122/78",
      heartRate: "75",
      hemoglobin: "12.2",
      weight: "66",
      notes: "Slight weight gain"
    },
    {
      date: "February 1, 2024",
      bp: "118/76",
      heartRate: "70",
      hemoglobin: "11.8",
      weight: "64",
      notes: "Hemoglobin slightly low"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">स्वास्थ्य रिकॉर्ड</h1>
          <p className="text-muted-foreground">
            View and manage your health records
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <QRCodeScanner />
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-blue" />
                  Patient Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-green/20 h-20 w-20 rounded-full flex items-center justify-center text-green text-2xl font-bold">
                      RS
                    </div>
                    <h2 className="font-bold mt-2">राजेश सिंह</h2>
                    <p className="text-sm text-muted-foreground">ID: ANM2023789</p>
                  </div>
                  
                  <div className="border-t pt-4 grid gap-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Age:</span>
                      <span className="text-sm font-medium">35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Gender:</span>
                      <span className="text-sm font-medium">Male</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Blood Type:</span>
                      <span className="text-sm font-medium">O+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Contact:</span>
                      <span className="text-sm font-medium">+91 9876543210</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Address:</span>
                      <span className="text-sm font-medium">Chandpur Village</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Tabs defaultValue="medical" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="medical" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Medical History
                </TabsTrigger>
                <TabsTrigger value="vitals" className="flex items-center">
                  <Activity className="h-4 w-4 mr-2" />
                  Vital Records
                </TabsTrigger>
                <TabsTrigger value="tests" className="flex items-center">
                  <Droplet className="h-4 w-4 mr-2" />
                  Lab Tests
                </TabsTrigger>
                <TabsTrigger value="appointments" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Appointments
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="medical">
                <div className="space-y-4">
                  {medicalRecords.map((record, index) => (
                    <Card key={index} className="health-card">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold">{record.date}</h3>
                              <div className="bg-blue/10 text-blue text-xs px-2 py-0.5 rounded ml-2">
                                {record.diagnosis}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{record.doctor}</p>
                            
                            <div className="mt-3">
                              <h4 className="text-xs font-semibold uppercase text-muted-foreground">Notes</h4>
                              <p className="text-sm mt-1">{record.notes}</p>
                            </div>
                            
                            <div className="mt-2">
                              <h4 className="text-xs font-semibold uppercase text-muted-foreground">Prescription</h4>
                              <ul className="list-disc list-inside text-sm mt-1">
                                {record.prescription.map((med, i) => (
                                  <li key={i}>{med}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="vitals">
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4">Date</th>
                            <th className="text-left p-4">BP</th>
                            <th className="text-left p-4">Heart Rate</th>
                            <th className="text-left p-4">Hemoglobin</th>
                            <th className="text-left p-4">Weight (kg)</th>
                            <th className="text-left p-4">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vitalRecords.map((vital, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="p-4">{vital.date}</td>
                              <td className="p-4">{vital.bp}</td>
                              <td className="p-4">{vital.heartRate}</td>
                              <td className="p-4">{vital.hemoglobin}</td>
                              <td className="p-4">{vital.weight}</td>
                              <td className="p-4">{vital.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Hemoglobin Trends</h3>
                  <Card className="p-4">
                    <div className="h-64 w-full bg-gray-50 flex items-center justify-center">
                      <p className="text-muted-foreground">Graph visualization will appear here</p>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="tests">
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No lab test records available.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="appointments">
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">
                    View your appointment history and upcoming appointments on the home page.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Records;
