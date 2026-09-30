import Audience from "@/components/Audience";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactStrip from "@/components/ContactStrip";
import Services from "@/components/Services";
import SocialFloating from "@/components/SocialFloating";
import Workflow from "@/components/Workflow";
import WhyFlashHonner from "@/components/WhyFlashHonner";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Projects />
        <Audience />
        <WhyFlashHonner />
        <Workflow />
        <ContactStrip />
      </main>

      <Footer />
      <SocialFloating />
    </>
  );
}
