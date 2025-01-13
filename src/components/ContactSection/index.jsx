import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent"></div>

      <div className="relative container mx-auto px-4 z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative inline-block mb-8">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold tracking-wider bg-gradient-to-r from-white to-indigo-200 
                       bg-clip-text text-transparent relative z-10"
            >
              İLETİŞİME GEÇİN
            </motion.h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-indigo-300/20 blur-xl"></div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Sunduğumuz hizmetler, özel teklifler ve ek sorularınız için, bize
            ulaşmaktan çekinmeyin. Size yardımcı olmaktan mutluluk duyarız.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
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
};

export default ContactSection;
