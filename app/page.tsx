import Audience from "@/components/Audience";
import Assurance from "@/components/Assurance";
import Capabilities from "@/components/Capabilities";
import ContextStrip from "@/components/ContextStrip";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Projects from "@/components/Projects";
import ContactStrip from "@/components/ContactStrip";
import Pricing from "@/components/Pricing";
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
        <ContextStrip />
        <Capabilities />
        <Services />
        <Projects />
        <Audience />
        <WhyFlashHonner />
        <Pricing />
        <Workflow />
        <Assurance />
        <Faq />
        <ContactStrip />
      </main>

      <Footer />
      <SocialFloating />
    </>
  );
}
