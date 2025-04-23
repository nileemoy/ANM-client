import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OnboardingScreens = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const screens = [
    {
      title: "Welcome to the App",
      description: "Discover the features of our app.",
      image: "/path/to/image1.svg",
    },
    {
      title: "Track Your Health",
      description: "Monitor your health with ease.",
      image: "/path/to/image2.svg",
    },
    {
      title: "Get Personalized Advice",
      description: "Receive recommendations tailored to you.",
      image: "/path/to/image3.svg",
    },
  ];

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <img src={screens[currentScreen].image} alt="Onboarding" className="w-1/2 mb-4" />
      <h2 className="text-2xl font-bold mb-2">{screens[currentScreen].title}</h2>
      <p className="text-muted-foreground mb-6">{screens[currentScreen].description}</p>
      <div className="flex items-center justify-between w-full px-4">
        <button onClick={prevScreen} className="text-primary" aria-label="Previous">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex space-x-2">
          {screens.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentScreen ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <button onClick={nextScreen} className="text-primary" aria-label="Next">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-6">
        <button className="bg-primary text-white px-4 py-2 rounded mr-2">Skip</button>
        <button className="bg-primary text-white px-4 py-2 rounded">Continue</button>
      </div>
    </div>
  );
};

export default OnboardingScreens; 