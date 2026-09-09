
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

import MouseFollower from "@/components/ui/MouseFollower";

export default function Index() {
  // Add scroll smoothing and prevent default behavior
  useEffect(() => {
    const bar = document.querySelector('.progress') as HTMLElement | null;
    const onScroll = () => {
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.setProperty('--p', `${p}%`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80, // Offset for navbar
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <MouseFollower />
      <div className="progress" />
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        
        {/* Quick footer */}
        <motion.footer
          className="py-8 text-center text-foreground/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto">
            <p>Chetan Sai Vatti Portfolio © {new Date().getFullYear()}</p>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
