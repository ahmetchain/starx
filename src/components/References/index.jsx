import React from 'react';
import { motion } from 'framer-motion';
import deik from "../../img/deik.png"
import ibb from "../../img/ibb_transparent.png"
import omchain from "../../img/omc.png"

const References = () => {
  const references = [
    { image: deik },
    { image: ibb },
    { image: omchain }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent"
        >
          REFERANSLARIMIZ
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm
                         border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/20 
                         hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center p-8">
                <img 
                  src={reference.image} 
                  alt="Referans"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-indigo-900/5 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References; 