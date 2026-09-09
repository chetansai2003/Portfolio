
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Command } from 'cmdk';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen(true);
      }
      if (e.key === 'Escape') setCmdOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  // Navbar background animation variants
  const navbarVariants = {
    initial: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      borderBottom: "1px solid rgba(255, 255, 255, 0)",
    },
    scrolled: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    }
  };

  // Social links with hover effects
  const socialLinks = [
    { icon: Github, href: "https://github.com/chetansai2003", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chetan-sai-vatti-777a05281/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chetansaivatti@gmail.com", label: "Email" }
  ];

  return (
    <motion.header
      variants={navbarVariants}
      animate={scrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 lg:px-10"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-display font-bold gradient-text">
            Chetan Sai Vatti
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center gap-8"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <a
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors link-underline text-sm font-medium"
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </motion.nav>

        {/* Social Links - Desktop Only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex items-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110"
              whileHover={{ y: -2 }}
              aria-label={social.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md shadow-lg lg:hidden border-t border-border"
            >
              <div className="flex flex-col space-y-4 px-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-primary py-2 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-6 pt-4"
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {cmdOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setCmdOpen(false)}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="mx-auto mt-24 w-full max-w-xl px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-xl border border-border bg-card/95 shadow-xl">
                  <Command>
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
                      <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <Command.Input placeholder="Type to jump…" className="bg-transparent outline-none text-sm flex-1 text-foreground placeholder:text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Esc</span>
                    </div>
                    <Command.List className="max-h-[50vh] overflow-auto">
                      <Command.Group heading="Navigate" className="text-xs text-muted-foreground px-3 py-2">
                        <div className="grid">
                          {navLinks.map((l) => (
                            <Command.Item
                              key={l.href}
                              onSelect={() => {
                                setCmdOpen(false);
                                const target = document.querySelector(l.href);
                                if (target) {
                                  window.scrollTo({
                                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                                    behavior: 'smooth'
                                  });
                                }
                              }}
                              className="px-3 py-2 text-sm text-foreground hover:bg-primary/10 cursor-pointer"
                            >
                              {l.name}
                            </Command.Item>
                          ))}
                        </div>
                      </Command.Group>
                      <Command.Group heading="Social" className="text-xs text-muted-foreground px-3 py-2">
                        <div className="grid">
                          {socialLinks.map((s) => (
                            <Command.Item
                              key={s.label}
                              onSelect={() => {
                                setCmdOpen(false);
                                window.open(s.href, '_blank');
                              }}
                              className="px-3 py-2 text-sm text-foreground hover:bg-primary/10 cursor-pointer"
                            >
                              {s.label}
                            </Command.Item>
                          ))}
                        </div>
                      </Command.Group>
                    </Command.List>
                  </Command>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
