import React, { useState } from "react";

const SchemeEligibilityChecker = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome! Let's check your scheme eligibility." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { type: "user", text: input }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Based on your input, you are eligible for the Health Support Scheme." },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h2 className="text-2xl font-bold mb-4">Scheme Eligibility Checker</h2>
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex flex-col space-y-2 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.type === "bot" ? "bg-muted text-black" : "bg-primary text-white self-end"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-muted rounded-l-lg"
            placeholder="Type your message..."
          />
          <button onClick={handleSend} className="bg-primary text-white px-4 py-2 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
      <button className="bg-support text-white px-4 py-2 rounded">Save for Later</button>
    </div>
  );
};

export default SchemeEligibilityChecker; 