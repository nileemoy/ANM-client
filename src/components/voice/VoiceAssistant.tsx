
import React, { useState } from "react";
import { Mic, MicOff, Play, StopCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const VoiceAssistant = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [responseText, setResponseText] = useState("");

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    // Simulated recording
    setTimeout(() => {
      setTranscript("मुझे अनीमिया के बारे में जानकारी चाहिए");
      stopRecording();
      generateResponse();
    }, 2000);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
  };

  const generateResponse = () => {
    // Simulated AI response
    setTimeout(() => {
      setResponseText("अनीमिया एक ऐसी स्थिति है जिसमें आपके रक्त में लाल रक्त कोशिकाओं की संख्या या हीमोग्लोबिन का स्तर कम हो जाता है। इसके लक्षण थकान, कमजोरी, सांस की तकलीफ और त्वचा का पीला पड़ना शामिल हैं। आयरन और विटामिन से भरपूर आहार लेना और डॉक्टर द्वारा निर्धारित आयरन सप्लीमेंट लेना महत्वपूर्ण है।");
    }, 1000);
  };

  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-teal to-blue p-3">
        <h2 className="text-white font-medium">AI स्वास्थ्य सहायक</h2>
      </div>
      <CardContent className="p-4">
        {transcript && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-muted-foreground">आपका प्रश्न:</p>
            <p className="bg-gray-50 p-2 rounded text-sm">{transcript}</p>
          </div>
        )}
        
        {responseText && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-muted-foreground">AI का उत्तर:</p>
            <p className="bg-lime/10 p-3 rounded text-sm border border-lime/30">{responseText}</p>
            
            <div className="mt-2 flex justify-end">
              <Button variant="outline" size="sm" onClick={toggleSpeech} className="text-xs">
                {isSpeaking ? <StopCircle className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                {isSpeaking ? "रोकें" : "सुनें"}
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-4">
          <Button
            onClick={toggleRecording}
            className={`rounded-full h-14 w-14 ${
              isRecording 
                ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                : "bg-blue hover:bg-blue/90"
            }`}
          >
            {isRecording ? (
              <MicOff className="h-6 w-6 text-white" />
            ) : (
              <Mic className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          {isRecording ? "Recording..." : "Press to ask a health question"}
        </p>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;
