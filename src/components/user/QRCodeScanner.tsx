
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scan, Check, X } from "lucide-react";

const QRCodeScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [patientData, setPatientData] = useState<null | {
    name: string;
    id: string;
    age: number;
    gender: string;
  }>(null);

  const startScanning = () => {
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setIsScanned(true);
      setPatientData({
        name: "संगीता देवी",
        id: "ANHM2023456",
        age: 28,
        gender: "Female"
      });
    }, 2000);
  };

  const resetScanner = () => {
    setIsScanned(false);
    setPatientData(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Scan className="mr-2 h-5 w-5 text-blue" />
          QR Code Patient Scanner
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {!isScanning && !isScanned ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 w-full flex flex-col items-center justify-center">
              <div className="bg-gray-100 rounded-full p-3 mb-3">
                <Scan className="h-8 w-8 text-blue" />
              </div>
              <p className="text-center text-sm text-muted-foreground mb-4">
                Scan patient's QR code to quickly access their health records
              </p>
              <Button onClick={startScanning} className="bg-blue hover:bg-blue/90">
                Start Scanning
              </Button>
            </div>
          ) : isScanning ? (
            <div className="border-2 border-blue border-dashed rounded-lg p-8 w-full flex flex-col items-center justify-center">
              <div className="relative">
                <div className="h-40 w-40 border-2 border-blue rounded-lg overflow-hidden">
                  <div className="absolute inset-0 border-2 border-blue">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue animate-pulse-light" />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue animate-pulse-light" />
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue animate-pulse-light" />
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-blue animate-pulse-light" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-blue font-medium">Scanning...</p>
            </div>
          ) : (
            <div className="border-2 border-green border-dashed rounded-lg p-6 w-full">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green/20 rounded-full p-2">
                  <Check className="h-6 w-6 text-green" />
                </div>
              </div>
              <h3 className="text-center font-medium mb-4">Patient Information</h3>
              
              {patientData && (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Name:</span>
                    <span className="text-sm font-medium">{patientData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ID:</span>
                    <span className="text-sm font-medium">{patientData.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Age:</span>
                    <span className="text-sm font-medium">{patientData.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Gender:</span>
                    <span className="text-sm font-medium">{patientData.gender}</span>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-6">
                <Button onClick={resetScanner} variant="outline" className="flex-1 mr-2">
                  <X className="h-4 w-4 mr-1" /> Reset
                </Button>
                <Button className="flex-1 bg-blue hover:bg-blue/90">
                  View Records
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeScanner;
