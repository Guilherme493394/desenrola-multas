import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Separator from "../components/Separator";
import Values from "../components/Values";
import Vission from "../components/Vission";
import WhatsAppSticky from "../components/WhatsAppSticky";
import WhoWeAre from "../components/WhoWeAre";

function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <Hero />
      <Separator id="about" />
      <WhoWeAre />
      <Separator id="mission" />
      <Mission />
      <Separator id="vision" />
      <Vission />
      <Separator id="values" />
      <Values />
      <WhatsAppSticky />
      <Footer />
    </div>
  );
}

export default Home;
