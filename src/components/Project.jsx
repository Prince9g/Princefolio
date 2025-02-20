import React, { useState } from "react";
import { motion } from "framer-motion";

const Project = ({image, description, name}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-80 h-72 overflow-hidden rounded-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={image}
        className="w-full h-full object-cover rounded-2xl"
        animate={{ filter: hovered ? "brightness(50%)" : "brightness(100%)" }}
        transition={{ duration: 0.3 }}
      />

      {/* Sliding Text Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl p-4"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: hovered ? "0%" : "100%", opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p className="text-white text-center text-md">{description}</p>
      </motion.div>

      {/* Title (Always Visible) */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xl font-bold text-orange-400">
        {name}
      </div>
    </motion.div>
  );
};

export default Project;
