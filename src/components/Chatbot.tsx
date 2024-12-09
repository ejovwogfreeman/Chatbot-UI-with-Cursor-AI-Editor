import { useState } from "react";
import "./Chatbot.css";
import { dummyMessages, keywordResponses } from "../data/dummyData";

function Chatbot() {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Check for keyword responses
      const keyword = Object.keys(keywordResponses).find((key) =>
        input.toLowerCase().includes(key)
      ) as keyof typeof keywordResponses;

      if (keyword) {
        const response = keywordResponses[keyword];
        const botMessage = {
          id: messages.length + 1,
          text: response,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        // Default response for unrecognized input
        const defaultResponse = "I'm sorry, I didn't understand that.";
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: messages.length + 1, text: defaultResponse, sender: "bot" },
        ]);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">Chatbot</div>
      <div className="chatbot-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chatbot-message ${msg.sender}`}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          ></div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
