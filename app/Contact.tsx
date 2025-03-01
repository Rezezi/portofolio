"use client";
import { FaGithub, FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <div className="bg-black text-white py-16 text-center">
      <h2 className="text-3xl font-bold text-green-400">Lets Connect</h2>
      <p className="text-gray-400 mt-2">
        Reach out to me on any platform below. I’d love to collaborate and chat with you!
      </p>
      <div className="flex justify-center gap-6 mt-6">
        {[
          { icon: <FaWhatsapp />, color: "bg-green-500", hover: "hover:bg-green-600" },
          { icon: <FaGithub />, color: "bg-gray-800", hover: "hover:bg-gray-700" },
          { icon: <FaInstagram />, color: "bg-pink-500", hover: "hover:bg-pink-600" },
          { icon: <FaYoutube />, color: "bg-red-500", hover: "hover:bg-red-600" },
          { icon: <FaEnvelope />, color: "bg-blue-500", hover: "hover:bg-blue-600" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href="#"
            className={`${item.color} p-4 rounded-full text-white text-2xl ${item.hover}`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0], 
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Connect;
