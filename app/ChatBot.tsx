"use client";
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSend, AiOutlineRobot } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() !== '') {
      const userMessage = input;
      setMessages([...messages, `You: ${userMessage}`]);
      setInput('');

      const botReply = await getBotReply(userMessage);
      setMessages(prevMessages => [...prevMessages, `Bot: ${botReply}`]);
    }
  };

  const getBotReply = async (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('who is axcel')) {
      return "Axcel is a passionate developer and tech enthusiast.";
    } else if (lowerMessage.includes('favorite programming language')) {
      return "Axcel loves JavaScript, TypeScript, and Python.";
    } else if (lowerMessage.includes('hobby')) {
      return "Gaming, coding, and playing basketball!";
    } else if (lowerMessage.includes('status')) {
      return "singgle .";
    } else if (lowerMessage.includes('favorite framework')) {
      return "Axcel really likes Next.js and Laravel.";
    } else if (lowerMessage.includes('dream job')) {
      return "Axcel wants to be a top software engineer or tech entrepreneur.";
    } else if (lowerMessage.includes('favorite color')) {
      return "Axcel loves black and red, just like ac milan club football!";
    }
    
    return "I can answer anything about Axcel and technology. Try asking something else!";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="p-4 bg-green-600 text-white rounded-full shadow-lg cursor-pointer"
          onClick={toggleChatBot}
        >
          <AiOutlineRobot className="text-3xl" />
        </motion.div>
      )}

      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 10 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
        >
          <div className="w-96 h-[500px] bg-gray-900 text-white rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="bg-green-600 p-4 flex justify-between items-center">
              <h3 className="font-bold">Chat with AxcelBot</h3>
              <AiOutlineClose
                onClick={toggleChatBot}
                className="text-white text-xl cursor-pointer hover:scale-110"
              />
            </div>
            
            <div className="p-4 text-sm text-gray-300">
              <p>You can ask me about Axcel, such as:</p>
              <ul className="list-disc ml-4">
                <li>Who is Axcel?</li>
                <li>What is Axcel s favorite programming language?</li>
                <li>What are Axcel s hobbies?</li>
                <li>What is Axcel s status?</li>
                <li>What is Axcel s dream job?</li>
                <li>What is Axcel s favorite color?</li>
              </ul>
            </div>

            <div className="flex-grow p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`my-2 p-2 rounded-lg ${msg.startsWith('You:') ? 'bg-green-700' : 'bg-gray-700'}`}
                >
                  {msg}
                </motion.div>
              ))}
            </div>

            <div className="p-4 flex items-center bg-gray-800">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow px-3 py-2 rounded-lg bg-gray-700 text-white outline-none"
                placeholder="Ask something..."
              />
              <button
                onClick={sendMessage}
                className="ml-2 p-3 bg-green-600 text-white rounded-full hover:scale-110"
              >
                <AiOutlineSend className="text-xl" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatBot;
