import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import styled from "styled-components";
import colors from "../styles/colors";

const AssistantContainer = styled.div`
  padding: 1rem;
  background: ${colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
`;

const Button = styled.button`
  background: ${colors.secondary};
  color: ${colors.text};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  &:hover {
    background: ${colors.primary};
    color: white;
  }
`;

const Assistant = ({ handleCommand }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support Speech Recognition.</p>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    handleCommand(transcript);
  };

  return (
    <AssistantContainer>
      <p>{listening ? "🎤 Listening..." : "🛑 Not Listening"}</p>
      <p><strong>Command:</strong> {transcript}</p>
      <Button onClick={startListening}>Start</Button>
      <Button onClick={stopListening} style={{ marginLeft: "10px" }}>
        Stop
      </Button>
      <Button onClick={resetTranscript} style={{ marginLeft: "10px" }}>
        Reset
      </Button>
    </AssistantContainer>
  );
};

export default Assistant;
