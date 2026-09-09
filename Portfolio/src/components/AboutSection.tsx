import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AboutSection() {
  const { toast } = useToast();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const handleResumeDownload = async () => {
    const filePath = "/Chetan-Sai-Vatti-Resume.pdf";
    try {
      const res = await fetch(filePath);
      if (!res.ok) {
        toast({
          title: "Resume not found",
          description: "Please contact me by email for a copy of my resume.",
        });
        return;
      }

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("pdf")) {
        toast({
          title: "Invalid file",
          description: "The resume is temporarily unavailable. Please try again later.",
        });
        return;
      }

      const blob = await res.blob();
      if (blob.size === 0) {
        toast({
          title: "Empty file",
          description: "Please contact me by email for a copy of my resume.",
        });
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Chetan-Sai-Vatti-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast({ title: "Resume downloaded" });
    } catch {
      toast({
        title: "Download failed",
        description: "Network issue or dev server reload. Please try again.",
      });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">About <span className="text-primary">Me</span></h2>
            <div className="h-[2px] bg-primary/50 flex-grow max-w-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-primary animate-slide-right"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Info Card */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="h-full bg-black/40 rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-500 p-1">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-3xl overflow-hidden">
                         👨‍🎓
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Chetan Sai Vatti</h3>
                    <p className="text-primary text-center font-medium mb-6 text-sm">Full Stack Developer</p>
                    
                    <div className="space-y-4 text-sm">
                      <a href="tel:+917003061422" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Phone size={16} className="text-primary" />
                        </div>
                        <span>+91 7003061422</span>
                      </a>
                      <a href="mailto:chetansaivatti@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Mail size={16} className="text-primary" />
                        </div>
                        <span className="truncate">chetansaivatti@gmail.com</span>
                      </a>
                      <a href="https://github.com/chetansai2003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Github size={16} className="text-primary" />
                        </div>
                        <span>chetansai2003</span>
                      </a>
                      <a href="https://www.linkedin.com/in/chetan-sai-vatti-777a05281/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors group">
                        <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                          <Linkedin size={16} className="text-primary" />
                        </div>
                        <span>Chetan Sai Vatti</span>
                      </a>
                      
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button onClick={handleResumeDownload} className="w-full py-2 rounded-lg bg-primary/20 hover:bg-primary/40 border border-primary/50 text-primary transition-all duration-300 text-sm font-medium">
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Experience
                </h3>
                
                <div className="space-y-6">
                  <motion.div variants={item} className="relative pl-8 border-l border-white/10 hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Full Stack Developer Intern</h4>
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20 whitespace-nowrap">2026</span>
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">TOSS Solutions</p>
                      <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                        <li>Developed and maintained MERN stack modules for a vendor management platform with dynamic onboarding, approval workflows, and role-based dashboards.</li>
                        <li>Built and integrated 40+ REST APIs using Node.js, Express.js, MongoDB, JWT authentication, OTP verification, and role-based access control.</li>
                        <li>Implemented vendor onboarding for PAN, GST, UDYAM, CIN, bank details, document uploads, and re-onboarding, alongside invoice management, chat, notifications, and audit logs.</li>
                        <li>Improved reliability with backend validations, duplicate-action prevention, secure role checks, and consistent API response handling.</li>
                      </ul>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
              
              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Education
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={item} className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </div>
                      <span className="text-xs text-muted-foreground bg-black/30 px-2 py-1 rounded">2022 - 2026</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">IIITDM Jabalpur</h4>
                    <p className="text-sm text-primary mb-2">B.Tech - Electronics & Communication</p>
                    <p className="text-xs text-muted-foreground">Jabalpur, India</p>
                  </motion.div>
                  

                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes slide-right {
          0% { left: -50%; }
          100% { left: 100%; }
        }
        .animate-slide-right {
          animation: slide-right 2s infinite linear;
        }
      `}</style>
    </section>
  );
}
