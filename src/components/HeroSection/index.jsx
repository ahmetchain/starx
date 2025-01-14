import React from "react";
import { motion } from "framer-motion";
import worldImage from "../../img/world.jpg";
import mobileWorldImage from "../../img/mobile_world.jpg";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden">
      {/* Background Image - Desktop */}
      <div className="hidden md:block absolute inset-0">
        <img
          src={worldImage}
          alt="World from space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
      </div>

      {/* Background Image - Mobile */}
      <div className="md:hidden absolute inset-0">
        <img
          src={mobileWorldImage}
          alt="World from space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block mb-6 md:mb-8"
          >
            <h1
              className="text-4xl sm:text-4xl md:text-7xl font-bold tracking-wider bg-white 
                         bg-clip-text text-transparent relative z-10 px-2"
              style={{
                lineHeight: "1.3",
              }}
            >
              "TEKNOLOJİYİ KEŞFET"
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-indigo-300/20 blur-xl"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-3"
          >
            STARX TEKNOLOJİ, KAMU VE ÖZEL SEKTÖRE YÖNELİK İHTİYACA UYGUN ÖZEL
            YAZILIM ÇÖZÜMLERİ VE DANIŞMANLIK HİZMETLERİ SUNAR.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            onClick={() => navigate("/contact")}
          >
            <span
              className="relative z-10 inline-block px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg
                          bg-gradient-to-r from-white to-indigo-200 text-black shadow-lg
                          transition-all duration-300 group-hover:bg-gray-100"
            >
              BİZE ULAŞIN
            </span>

            <div
              className="absolute -inset-1 bg-white/20 rounded-lg blur-md
                          opacity-0 group-hover:opacity-100 transition duration-300"
            ></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
