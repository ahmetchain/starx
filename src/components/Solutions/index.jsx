import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Link } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Link className="w-12 h-12" />,
      title: "ÖZEL BLOCKCHAİN VE SMART CONTRACT",
      description: "Kuruma özel blockchain Veri değiştirilemezliği Dijital ID Çözümleri Tokenizasyon"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "WEB VE MOBİL GELİŞTİRME",
      description: "Ölçeklenebilir web servisleri iOS ve Android mobil uygulama DevOps hizmetleri"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "YAPAY ZEKA",
      description: "Yapay Zeka destekli Chatbot Veriye Dayalı analiz ve dönüşüm arttırma araçları geliştirme hizmetleri"
    }
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
          ÇÖZÜMLERİMİZ
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/30 
                         backdrop-blur-sm border border-indigo-500/20 shadow-lg 
                         hover:shadow-indigo-500/20 hover:border-indigo-500/50 
                         transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-indigo-900/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 
                             bg-clip-text text-transparent group-hover:to-white transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 