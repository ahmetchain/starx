import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Coins, TrendingUp, Scale, Users, Database } from 'lucide-react';

const Consulting = () => {
  const consultingServices = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "PROJE KONSEPT VE İŞ GELİŞTİRME DANIŞMANLIĞI"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "TOKENOMICS VE FINANSAL MODEL DANISMANLIĞI"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "PAZAR ARAŞTIRMASI VE PAZARLAMA STRATEJISI DANISMANLIĞI"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "BLOCKCHAIN HUKUKU DANIŞMANLIĞI"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "GELİŞTİRİCİ EKİP SEÇİMİ DANIŞMANLIĞI"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "BLOCKCHAIN SEÇİMİ VE AKILLI KONTRAT MİMARİSİ DANIŞMANLIĞI"
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent"
        >
          DANIŞMANLIK
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-indigo-950/30 to-black/50
                         backdrop-blur-sm border-l-2 border-indigo-500/20 shadow-lg 
                         hover:shadow-indigo-500/10 hover:border-l-indigo-400
                         transition-all duration-500 ease-out overflow-hidden
                         flex items-center space-x-4"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-indigo-600/5 to-indigo-900/5
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-indigo-700/10
                              group-hover:from-indigo-500/20 group-hover:to-indigo-700/20 transition-colors duration-300">
                  <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="flex-1 text-lg font-bold bg-gradient-to-r from-white to-indigo-200 
                             bg-clip-text text-transparent group-hover:to-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consulting; 