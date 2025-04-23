import React, { useState } from "react";

const HealthAssessmentFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const questions = [
    {
      question: "How often do you exercise?",
      options: ["Daily", "Weekly", "Rarely"],
      icon: "/path/to/exercise-icon.svg",
    },
    {
      question: "Do you have any dietary restrictions?",
      options: ["Yes", "No"],
      icon: "/path/to/diet-icon.svg",
    },
    {
      question: "How many hours do you sleep per night?",
      options: ["< 5 hours", "5-7 hours", "> 7 hours"],
      icon: "/path/to/sleep-icon.svg",
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <img src={questions[currentStep].icon} alt="Question Icon" className="w-1/4 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{questions[currentStep].question}</h2>
      <div className="flex flex-col space-y-2 mb-6">
        {questions[currentStep].options.map((option, index) => (
          <button key={index} className="bg-secondary text-white px-4 py-2 rounded">
            {option}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
      <button onClick={nextStep} className="bg-primary text-white px-4 py-2 rounded mt-4">
        Next
      </button>
    </div>
  );
};

export default HealthAssessmentFlow; 