import React from "react";

const OfflineModeWarning = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <img src="/path/to/offline-illustration.svg" alt="Offline Illustration" className="w-1/2 mb-4" />
      <h2 className="text-2xl font-bold mb-2">You're Offline</h2>
      <p className="text-muted-foreground mb-6">
        Some features are limited. Please check your connection.
      </p>
      <div className="flex items-center mb-4">
        <span className="text-muted-foreground mr-2">Sync Status:</span>
        <span className="text-red-500">Offline</span>
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded">
        Retry Sync
      </button>
    </div>
  );
};

export default OfflineModeWarning; 