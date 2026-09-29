import Audience from "@/components/Audience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Requirements from "@/components/Requirements";
import Services from "@/components/Services";
import SocialFloating from "@/components/SocialFloating";
import Workflow from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Audience />
        <Workflow />
        <Requirements />
      </main>

      <Footer />
      <SocialFloating />
    </>
  );
}
