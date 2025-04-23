import React, { useState } from "react";

const ConsentScreen = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleCheckboxChange = () => {
    setConsentGiven(!consentGiven);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <img src="/path/to/consent-illustration.svg" alt="Consent Illustration" className="w-1/2 mb-4" />
      <h2 className="text-2xl font-bold mb-2">Consent for Data Sharing</h2>
      <p className="text-muted-foreground mb-6">
        We value your privacy. Please provide your consent for data sharing and usage.
      </p>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="consentCheckbox"
          checked={consentGiven}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="consentCheckbox" className="text-muted-foreground">
          I agree to the data sharing and usage policy.
        </label>
      </div>
      <button
        className={`bg-primary text-white px-4 py-2 rounded ${!consentGiven ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!consentGiven}
      >
        Accept
      </button>
    </div>
  );
};

export default ConsentScreen; 