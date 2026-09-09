import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, Code, Layers, Braces, Terminal, Cpu, Database } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations for floating elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    const floatingElements = containerRef.current.querySelectorAll('.floating-icon');
    
    floatingElements.forEach((el) => {
      const randomDuration = 5 + Math.random() * 3;
      const randomDelay = Math.random() * 2;
      const randomX = (Math.random() - 0.5) * 40;
      const randomY = (Math.random() - 0.5) * 40;
      
      gsap.to(el, {
        x: randomX,
        y: randomY,
        rotation: Math.random() * 20 - 10,
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: randomDelay
      });
    });
    
    return () => {
      gsap.killTweensOf(floatingElements);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-28 pb-36 bg-background"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '5s' }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-[15%] left-[10%] text-primary/20">
          <Code size={48} />
        </div>
        <div className="floating-icon absolute bottom-[20%] right-[10%] text-primary/20">
          <Layers size={64} />
        </div>
        <div className="floating-icon absolute top-[40%] right-[20%] text-primary/10">
          <Braces size={56} />
        </div>
        <div className="floating-icon absolute bottom-[30%] left-[15%] text-primary/15">
          <Terminal size={40} />
        </div>
        <div className="floating-icon absolute top-[20%] right-[40%] text-primary/10">
          <Cpu size={32} />
        </div>
         <div className="floating-icon absolute bottom-[10%] left-[40%] text-primary/10">
          <Database size={36} />
        </div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text content */}
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left px-4">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full mb-6 bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary tracking-wide">FULL STACK / MERN DEVELOPER</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display tracking-tight leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 relative">
                Chetan Sai Vatti
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I am a Full Stack Developer focused on building clean, scalable, and user-friendly web applications using the MERN stack. I turn ideas into practical products with responsive interfaces, secure APIs, authentication, thoughtful database design, and smooth user workflows.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB",
                  "MySQL", "Git", "Vite"
                ].map((tech, i) => (
                  <motion.span 
                    key={tech} 
                    className="px-4 py-1.5 bg-secondary/50 hover:bg-primary/20 border border-border/50 hover:border-primary/50 rounded-md text-sm transition-all duration-300 backdrop-blur-md cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden"
                onMouseMove={(e) => {
                  const r = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
                  const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
                  const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
                  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translate(0px, 0px)`;
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium"
                onMouseMove={(e) => {
                  const r = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
                  const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
                  const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
                  e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `translate(0px, 0px)`;
                }}
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          {/* Visual element */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
            variants={itemVariants}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[60px] animate-pulse"></div>
              
              <div className="relative w-full h-full border border-primary/30 rounded-2xl backdrop-blur-sm bg-black/40 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center group">
                 <img
                   src="/profile.png"
                   alt="Chetan Sai Vatti"
                   width={1254}
                   height={1254}
                   fetchPriority="high"
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />

                 {/* Corner accents */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                 <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white blur-[1px] animate-drop"></div>
          </div>
        </a>
      </motion.div>

      <style>{`
        @keyframes drop {
          0% { top: -50%; }
          100% { top: 100%; }
        }
        .animate-drop {
          animation: drop 1.5s infinite linear;
        }
      `}</style>
    </section>
  );
}
