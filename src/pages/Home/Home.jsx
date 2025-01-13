import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import Solutions from "../../components/Solutions";
import Products from "../../components/Products";
import Consulting from "../../components/Consulting";
import References from "../../components/References";
import About from "../../components/About";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="consulting">
        <Consulting />
      </div>
      <div id="references">
        <References />
      </div>
      <div id="about">
        <About />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
