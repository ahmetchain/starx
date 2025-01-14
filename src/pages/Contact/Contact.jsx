import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Phone, Building2, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="relative py-32 bg-black overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80"></div>

        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Başlık ve Açıklama */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent"
            >
              BİZE ULAŞIN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-400 text-center leading-relaxed max-w-2xl mx-auto mb-16"
            >
              Sunduğumuz hizmetler, özel teklifler ve ek sorularınız için, bize
              ulaşmaktan çekinmeyin. Size yardımcı olmaktan mutluluk duyarız.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-3 p-8 rounded-2xl bg-gradient-to-br from-black/80 to-gray-900/30 
                           backdrop-blur-sm border border-indigo-500/20 shadow-lg"
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      İsim
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/40 border border-indigo-500/20 rounded-lg 
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               placeholder-gray-500 transition-all duration-300"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/40 border border-indigo-500/20 rounded-lg 
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               placeholder-gray-500 transition-all duration-300"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/40 border border-indigo-500/20 rounded-lg 
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               placeholder-gray-500 transition-all duration-300"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 bg-black/40 border border-indigo-500/20 rounded-lg 
                               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                               placeholder-gray-500 transition-all duration-300"
                      placeholder="Mesajınız..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-white to-indigo-200 text-black
                             font-medium rounded-lg flex items-center justify-center gap-2
                             hover:from-white hover:to-indigo-400 
                             transition-all duration-300 transform "
                  >
                    <Send className="w-5 h-5" />
                    <span>Gönder</span>
                  </button>
                </div>
              </motion.form>

              {/* İletişim Bilgileri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-black/50
                           backdrop-blur-sm border-l-2 border-indigo-500/20 shadow-lg space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-indigo-700/10">
                      <Phone className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">0507 970 9720</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-indigo-700/10">
                      <Building2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">
                        Starx (Starx Teklonoji Anonim Şirketi)
                      </p>
                      <p className="text-sm text-gray-500">
                        Mersis No: 0781106365900001
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-400 pl-10">
                      Kurtköy Mahallesi, Ankara Caddesi, Kapı No:289/21 Yelken
                      Plaza - Pendik / İstanbul
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-indigo-700/10">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <p className="text-gray-400">info@starxteknoloji.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
