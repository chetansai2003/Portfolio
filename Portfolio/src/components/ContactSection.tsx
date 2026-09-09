import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Loader2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent("Portfolio enquiry from " + formData.name);
      const body = encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message);
      window.location.href = "mailto:chetansaivatti@gmail.com?subject=" + subject + "&body=" + body;
      toast({
        title: "Email draft requested",
        description: "Send the draft from your email app to complete your enquiry.",
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-primary text-sm font-mono tracking-wider uppercase mb-2">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             {/* Contact Info */}
             <div className="space-y-8">
               <div className="relative">
                 <h3 className="text-3xl font-bold mb-4">Let's build something <br/><span className="text-primary">amazing together</span></h3>
                 <p className="text-gray-400 text-lg leading-relaxed">
                   I welcome opportunities in full stack and MERN development. 
                   Get in touch to discuss a role, a project, or a collaboration.
                 </p>
               </div>
               
               <div className="space-y-6">
                 {[
                   { icon: <Mail size={24} />, label: "Email", value: "chetansaivatti@gmail.com", href: "mailto:chetansaivatti@gmail.com" },
                   { icon: <Phone size={24} />, label: "Phone", value: "+91 7003061422", href: "tel:+917003061422" },
                  
                 ].map((item, idx) => (
                   <motion.a 
                     key={idx}
                     href={item.href}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                   >
                     <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                       {item.icon}
                     </div>
                     <div className="min-w-0">
                       <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                       <p className="text-base sm:text-lg break-all font-medium text-gray-200 group-hover:text-white transition-colors">{item.value}</p>
                     </div>
                   </motion.a>
                 ))}
               </div>
             </div>
             
             {/* Contact Form */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-black/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 text-white placeholder:text-gray-600 h-12 rounded-xl"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-black/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 text-white placeholder:text-gray-600 h-12 rounded-xl"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      required
                      className="min-h-[150px] bg-black/40 border-white/10 focus:border-primary/50 focus:ring-primary/20 resize-none text-white placeholder:text-gray-600 rounded-xl"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 rounded-xl group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Compose Email
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
