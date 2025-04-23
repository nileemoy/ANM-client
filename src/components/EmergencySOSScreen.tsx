import React from "react";
import { PhoneCall } from "lucide-react";

const EmergencySOSScreen = () => {
  const handleSOSClick = () => {
    alert("Emergency contact initiated.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background relative">
      <h2 className="text-2xl font-bold mb-4">Emergency SOS</h2>
      <p className="text-muted-foreground mb-6">
        Tap the SOS button for immediate assistance.
      </p>
      <div className="fixed bottom-4 right-4 animate-pulse">
        <button
          onClick={handleSOSClick}
          className="bg-red-500 text-white p-4 rounded-full shadow-lg"
          aria-label="Emergency SOS"
        >
          <PhoneCall className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default EmergencySOSScreen; 