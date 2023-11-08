import React, { useState } from "react";
import WallsImg from "../boq_generator/Assets/wall.jpg";

const Chatbox = () => {
  const backgroundImageUrl = WallsImg;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");

    setTimeout(() => {
      setMessages([
        ...messages,
        { text: "This is a sample response", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
      <div className="bg-white rounded p-16 shadow-md">
        <div className="border rounded-lg">
          <div className="px-4 py-2 bg-blue-500 text-white">Chat Me</div>
          <div className="px-4 py-2 h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`px-4 py-2 rounded-lg inline-block ${
                    message.sender === "user" ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                className="w-full rounded-full border px-3 py-2 mr-2 focus:outline-none"
                placeholder="Type a message..."
                value={newMessage}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Chatbox;
