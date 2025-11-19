import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import AboutSection from '@/components/landing/about-section';
import TeamSection from '@/components/landing/team-section';
import ServicesSection from '@/components/landing/services-section';
import FreelancersSection from '@/components/landing/freelancers-section';
import AiMatcherSection from '@/components/landing/ai-matcher-section';
import ContactSection from '@/components/landing/contact-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ServicesSection />
        <FreelancersSection />
        <AiMatcherSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
