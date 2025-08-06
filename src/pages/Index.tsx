import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComingSoonSection from '@/components/ComingSoonSection';
import ContactSection from '@/components/ContactSection';
import ParticleBackground from '@/components/ParticleBackground';
import WhatCanYouBuildSection from '@/components/WhatCanYouBuildSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhatCanYouBuildSection />
        <HowItWorksSection />
        <ComingSoonSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
