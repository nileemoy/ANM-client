
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import QRCodeScanner from "@/components/user/QRCodeScanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Bell, Check, Heart, Users } from "lucide-react";

const ANM = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">ANM Dashboard</h1>
          <p className="text-muted-foreground">
            Manage patients and health services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-teal">
            <CardContent className="p-6 flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-2xl">128</h3>
                <p className="text-white/90">Registered Patients</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-green">
            <CardContent className="p-6 flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-2xl">24</h3>
                <p className="text-white/90">Checkups This Week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-blue">
            <CardContent className="p-6 flex items-center">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-2xl">7</h3>
                <p className="text-white/90">High-Risk Cases</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <QRCodeScanner />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5 text-blue" />
                  SOS Emergency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    In case of emergency, press the SOS button to alert nearby health centers and paramedical staff.
                  </p>
                  
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <Heart className="mr-2 h-5 w-5" /> Send SOS Alert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Patient Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Name</th>
                        <th className="text-left p-3">Age/Gender</th>
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Condition</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3">गीता देवी</td>
                        <td className="p-3">28/F</td>
                        <td className="p-3">Apr 10, 2024</td>
                        <td className="p-3">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                            Pregnancy Checkup
                          </span>
                        </td>
                        <td className="p-3">
                          <Button variant="outline" size="sm">View Details</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3">राम कुमार</td>
                        <td className="p-3">45/M</td>
                        <td className="p-3">Apr 10, 2024</td>
                        <td className="p-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            Hypertension
                          </span>
                        </td>
                        <td className="p-3">
                          <Button variant="outline" size="sm">View Details</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3">शीला पटेल</td>
                        <td className="p-3">32/F</td>
                        <td className="p-3">Apr 11, 2024</td>
                        <td className="p-3">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                            Anemia
                          </span>
                        </td>
                        <td className="p-3">
                          <Button variant="outline" size="sm">View Details</Button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3">अरुण सिंह</td>
                        <td className="p-3">5/M</td>
                        <td className="p-3">Apr 12, 2024</td>
                        <td className="p-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            Vaccination
                          </span>
                        </td>
                        <td className="p-3">
                          <Button variant="outline" size="sm">View Details</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>High-Risk Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                    <div className="flex">
                      <div className="mr-3">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">संगीता देवी - 26/F</h3>
                        <p className="text-sm mt-1">
                          Pregnant (8 months) with severe anemia - Hb 7.2 g/dL. Requires immediate attention.
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" className="text-red-500 border-red-200">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                            Contact Patient
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                    <div className="flex">
                      <div className="mr-3">
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">रमेश वर्मा - 62/M</h3>
                        <p className="text-sm mt-1">
                          Uncontrolled hypertension (180/110). Missed last two appointments.
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline" className="text-orange-500 border-orange-200">
                            View Details
                          </Button>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                            Contact Patient
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ANM;
