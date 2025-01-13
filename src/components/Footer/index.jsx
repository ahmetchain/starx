import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent"></div>

      <div className="relative container mx-auto px-4 z-10 py-8">
        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950/30 to-black/50
                     backdrop-blur-sm border border-indigo-500/20 shadow-lg p-8
                     hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 font-medium">STARX © 2024</div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <a
                href="/docs/gizlilik-politikasi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 
                         relative group"
              >
                GİZLİLİK POLİTİKASI
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 
                               group-hover:w-full transition-all duration-300"></span>
              </a>

              <a
                href="/docs/kvkk-aydinlatma-metni.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300
                         relative group"
              >
                KVKK AYDINLATMA METNİ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 
                               group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
