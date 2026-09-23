import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Code2 } from 'lucide-react';
import TypingText from "./ui/TypingText";

import scopedAiImg from "../assets/scoped-ai.png";
import supportAiImg from "../assets/support-ai.png";
import borrowerImg from "../assets/borrower-copilot.png";
import heavenImg from "../assets/the-heaven.png";
import mythicArenaImg from "../assets/mythic-arena.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  color: string;
  featured?: boolean;
}

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const projects: Project[] = [
    { id: 0, title: "Mythic Arena", image: mythicArenaImg, description: "Engineered a full-stack real-time 1v1 tactical card battle game featuring interactive 3D arena visuals, custom deck builder, bot practice matches, WebSocket live matchmaking, and resilient turn-based state synchronization.", tech: ["React.js", "Three.js", "Node.js", "Socket.io", "Redux Toolkit", "MongoDB", "Tailwind CSS"], github: "https://github.com/chetansai2003/Mythic-Arena", demo: "https://mythic-arena-frontend.vercel.app/", color: "#3b82f6" },
    { id: 1, title: "Scoped AI Template Editor", image: scopedAiImg, description: "Built a responsive template editor with canvas selection, manual and validated code editing, deterministic AI proposals, and reliable history, undo, restore, and persistence workflows.", tech: ["React.js","TypeScript","Vite","Redux Toolkit","Zod","Playwright","Vitest"], github: "https://github.com/chetansai2003/scoped-ai-template-editor", demo: "https://scoped-ai-template-editor-beta.vercel.app/", color: "#3b82f6" },
    { id: 2, title: "Customer Support AI Assistant", image: supportAiImg, description: "Developed a full-stack AI-powered customer support system with real-time conversations, persistent chat history, LLM-based classification, structured validation, and human handoff.", tech: ["React.js","Node.js","Express.js","Supabase","LLM","Zod","n8n"], github: "https://github.com/chetansai2003/Customer-Support-AI-Assistant", demo: "https://customer-support-ai-assistant-ten.vercel.app/", color: "#3b82f6" },
    { id: 3, title: "Borrower Copilot", image: borrowerImg, description: "Created an educational borrower-side affordability tool with guided questionnaires, financial assessment logic, repayment insights, privacy-first local processing, and clear result summaries.", tech: ["React.js","TypeScript","Vite","Context API","Vitest","Playwright"], github: "https://github.com/chetansai2003/Borrower-Copilot", demo: "https://borrower-copilot-kappa.vercel.app/", color: "#3b82f6" },
    { id: 4, title: "The Heaven E-commerce", image: heavenImg, description: "Built a MERN e-commerce application with product browsing, cart flows, authentication, cloud media handling, admin management, and a responsive shopping experience.", tech: ["React.js","Node.js","Express.js","MongoDB","JWT","Cloudinary"], github: "https://github.com/chetansai2003/The-Heaven", demo: "https://the-heaven-y1b5.vercel.app/", color: "#3b82f6" }
  ];

  return (
    <section id="projects" className="py-24 relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <span className="text-primary text-sm font-mono tracking-wider uppercase mb-2">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </motion.div>

        <div className="relative">
           {/* Vertical Line */}
           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block"></div>

           <div className="space-y-16 md:space-y-24">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Description Side (Desktop) */}
                <div className={`hidden md:flex w-1/2 items-center justify-center ${
                  idx % 2 === 0 ? "md:pr-16 text-left" : "md:pl-16 text-right"
                }`}>
                  <div className="text-gray-300 text-lg leading-relaxed font-medium">
                     <TypingText text={project.description} speed={20} delay={0.2} />
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black border-2 border-primary z-10 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]"></div>
                </div>

                {/* Project Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-xl"></div>
                    
                    <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 group-hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Floating Tech Stack */}
                        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                           {project.tech.slice(0, 3).map((t, i) => (
                             <span key={i} className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-md">
                               {t}
                             </span>
                           ))}
                           {project.tech.length > 3 && (
                             <span className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/10 rounded-md">
                               +{project.tech.length - 3}
                             </span>
                           )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                          {project.title}
                          <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                        </h3>
                        
                        {/* Description (Mobile Only) */}
                        <div className="md:hidden text-gray-400 text-sm mb-6 min-h-[60px]">
                          <TypingText text={project.description} speed={20} delay={0.2} />
                        </div>

                        <div className="flex items-center gap-4 mt-auto">
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-700 text-white text-center text-sm font-semibold hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
                              title="View Code"
                            >
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
