
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <MainLayout>
      <div className="container py-8 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold mb-1">Usha Sharma</h2>
                  <p className="text-gray-500 mb-4">usharma@example.com</p>
                  <div className="w-full mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Age</span>
                      <span className="font-medium">32</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Gender</span>
                      <span className="font-medium">Female</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Blood Group</span>
                      <span className="font-medium">B+</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Location</span>
                      <span className="font-medium">Guwahati, Assam</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="mt-1">Usha Sharma</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Date of Birth</label>
                    <p className="mt-1">15-08-1990</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone Number</label>
                    <p className="mt-1">+91 98765 43210</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                    <p className="mt-1">usharma@example.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Aadhaar Number</label>
                    <p className="mt-1">XXXX-XXXX-1234</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Emergency Contact</label>
                    <p className="mt-1">+91 98765 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Height</label>
                    <p className="mt-1">162 cm</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Weight</label>
                    <p className="mt-1">58 kg</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Allergies</label>
                    <p className="mt-1">Peanuts, Dust</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Blood Pressure</label>
                    <p className="mt-1">120/80 mmHg</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Current Medications</label>
                    <p className="mt-1">Iron supplements</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Medical Conditions</label>
                    <p className="mt-1">Mild anemia</p>
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

export default Profile;
