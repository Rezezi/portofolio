"use client";
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import Image from 'next/image'; // Assuming you're using Next.js for images

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // List of questions users can ask
  const instructions = [
    "Who made this? (Siapa yang buat?)",
    "Dimana dia sekolah?",
    "Apa bahasa program yang dia suka?",
    "Hobi dia apa?",
    "Status dia apa?",
    "Dia siapa?",
    "Dia ngapain di sekolah?",
    "How are you?",
    "What can you do?",
    "What's your purpose here?",
  ];

  // Handle opening/closing the chatbot
  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending messages
  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');

      // Check for specific questions about Axcel
      const botReply = getBotReply(input.trim().toLowerCase());
      if (botReply) {
        setMessages((prevMessages) => [...prevMessages, botReply]);
      }
    }
  };

  // Simple bot responses based on user input
  const getBotReply = (message: string) => {
    if (message.includes('who made this') || message.includes('siapa yang buat')) {
      return "This website was created by Axcel.";
    } else if (message.includes('dimana dia sekolah')) {
      return "Axcel goes to school at SMKN 21 Jakarta.";
    } else if (message.includes('apa bahasa program yang dia suka')) {
      return "JavaScript & TypeScript.";
    } else if (message.includes('hobi dia apa')) {
      return "Gaming, Coding & Playing basketball.";
    } else if (message.includes('status dia apa')) {
      return "Jomlo dan siswa.";
    } else if (message.includes('dia siapa')) {
      return "Dia Axcel, pemilik portofolio ini.";
    } else if (message.includes('dia ngapain di sekolah')) {
      return "Ngoding & tidur.";
    } else if (message.includes('how are you')) {
      return "I'm here and ready to assist!";
    } else if (message.includes('what can you do')) {
      return "I can answer questions about Axcel and general inquiries.";
    } else if (message.includes('what\'s your purpose here')) {
      return "I'm here to help you learn more about Axcel and this website.";
    }

    return "I'm not sure about that. Try asking something else!";
  };

  // Handling the "Enter" key to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Icon to open/close */}
      {!isOpen && (
        <div
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110"
          onClick={toggleChatBot}
        >
          <Image src="/chatbot.png" alt="ChatBot Icon" width={30} height={30} className="rounded-full" /> {/* Adjust size */}
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-64 h-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"> {/* Adjust size */}
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-bold">Chat</h3>
            <AiOutlineClose
              onClick={toggleChatBot}
              className="text-white text-xl cursor-pointer transition-transform transform hover:scale-110"
            />
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Instructions */}
            <div className="my-2 p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200">
              <strong>Anda bisa bertanya tentang:</strong>
              <ul className="list-disc list-inside">
                {instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>

            {/* Display messages */}
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 p-2 rounded-lg ${index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-100 dark:bg-blue-900'}`}>
                {msg}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 outline-none" // Adjust padding
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 bg-blue-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              <AiOutlineSend className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
