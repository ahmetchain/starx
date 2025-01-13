import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Target, Users2 } from 'lucide-react';

const About = () => {
  const companyInfo = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Starx Teknoloji",
      subtitle: "Starx Teknoloji Anonim Şirketi"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Kuruluş",
      subtitle: "2023"
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
          HAKKIMIZDA
        </motion.h2>

        {/* Company Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {companyInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-indigo-950/30 to-black/50
                         backdrop-blur-sm border-l-2 border-indigo-500/20 shadow-lg 
                         hover:shadow-indigo-500/10 hover:border-l-indigo-400
                         transition-all duration-500 ease-out overflow-hidden
                         flex items-center space-x-4"
            >
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-indigo-700/10
                            group-hover:from-indigo-500/20 group-hover:to-indigo-700/20 transition-colors duration-300">
                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">
                  {info.icon}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-white to-indigo-200 
                             bg-clip-text text-transparent group-hover:to-white transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {info.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-950/30 to-black/50
                     backdrop-blur-sm border border-indigo-500/20 shadow-lg p-8 md:p-10
                     hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-500"
        >
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Starx Teknoloji (Starx Teknoloji Anonim Şirketi), 2023 yılında kurulmuş öncü bir teknoloji ve yazılım şirketidir. 
              Misyonumuz, en son teknoloji trendlerini takip ederek, kurumlara ve işletmelere özgün ve yenilikçi yazılım çözümleri sunmaktır. 
              Müşterilerimize, ihtiyaçlarına özel olarak tasarlanmış yazılım hizmetleri ile destek olmaktayız.
            </p>
            <p>
              Biz Starx Teknoloji olarak, her bir projeyi, müşterilerimizin beklentilerini aşacak şekilde tasarlamak ve uygulamak için çalışıyoruz. 
              Tecrübeli ekibimiz ve güçlü teknik altyapımız ile sektörde fark yaratmayı hedefliyoruz. 
              İşletmelerin dijital dönüşüm yolculuklarında güvenilir bir partner olmayı amaçlayarak, 
              sürekli gelişen ve yenilenen bir hizmet anlayışıyla faaliyet göstermekteyiz.
            </p>
            <p>
              Starx Teknoloji olarak, teknoloji ve yazılım alanında yenilikçi çözümler sunmakla kalmıyor, 
              aynı zamanda müşterilerimizin iş süreçlerini daha verimli ve etkili hale getirecek stratejiler geliştiriyoruz. 
              Şirketimiz, sektördeki en yeni teknolojileri kullanarak müşterilerimize rekabet avantajı sağlamayı hedeflemektedir. 
              Bizimle iletişime geçerek işletmenizin dijital dönüşümünü hızlandırın ve teknolojinin sunduğu avantajlardan faydalanın.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 