/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MousePointer2
} from 'lucide-react';

const FEATURES = [
  {
    title: "Conversion-First Design",
    description: "We don't just build pretty sites. We build sales machines optimized for the modern buyer's journey.",
    icon: Target,
    color: "text-violet-400"
  },
  {
    title: "Lightning Fast Performance",
    description: "Sub-second load times that keep users engaged and boost your SEO rankings automatically.",
    icon: Zap,
    color: "text-cyan-400"
  },
  {
    title: "Data-Driven Strategy",
    description: "Every pixel is placed with purpose, backed by heatmaps and user behavior analytics.",
    icon: TrendingUp,
    color: "text-emerald-400"
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content: "Convertic transformed our bounce rate from 65% to 22% in just one month. Our sales have never been higher.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    role: "Founder of Bloom",
    content: "The attention to detail is insane. It's not just a website; it's a premium brand experience that converts.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    content: "Working with this agency was the best investment we made this year. The ROI was immediate.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-2xl shadow-violet-500/10' : ''}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Convertic</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-xl text-sm font-semibold hover:bg-violet-50 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Animated Lines (Visual from image) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '60vh', opacity: [0, 1, 0] }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="absolute top-0 glow-line w-[1px]"
            style={{ left: `${10 + i * 8}%`, transform: `rotate(${ (i - 6) * 2 }deg)` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-violet-300 mb-8">
            <Star className="w-3 h-3 fill-current" />
            Voted #1 Design Agency for ROI
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Turn your viewers into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">loyal buyers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            We build gorgeous, high-performance websites that don't just look good—they actually convert. Stop losing leads to bad design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-violet-50 transition-all flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Dashboard Preview (Visual from image) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative"
        >
          <div className="glass rounded-3xl p-4 md:p-8 aspect-video max-w-4xl mx-auto shadow-2xl shadow-violet-500/20 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="h-4 w-32 bg-white/5 rounded-full" />
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3 space-y-4">
                <div className="h-12 bg-white/10 rounded-xl" />
                <div className="h-8 bg-white/5 rounded-xl" />
                <div className="h-8 bg-white/5 rounded-xl w-2/3" />
              </div>
              <div className="col-span-9 space-y-6">
                <div className="h-40 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl border border-white/10" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="h-24 bg-white/5 rounded-2xl" />
                  <div className="h-24 bg-white/5 rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-4 md:right-12 glass p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Conversion Rate</div>
                <div className="text-xl font-bold">+124%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Built for performance</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            We combine world-class design with conversion psychology to deliver results that move the needle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-3xl group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-32 bg-white/2">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-bold tracking-widest uppercase text-xs">Social Proof</span>
          <h2 className="font-display text-4xl font-bold mt-4">Trusted by industry leaders</h2>
        </div>

        <div className="relative glass p-8 md:p-16 rounded-[40px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-violet-400 text-violet-400" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-12 italic leading-relaxed">
                "{TESTIMONIALS[active].content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={TESTIMONIALS[active].avatar} 
                  alt={TESTIMONIALS[active].name}
                  className="w-14 h-14 rounded-full border-2 border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <div className="font-bold text-lg">{TESTIMONIALS[active].name}</div>
                  <div className="text-white/40 text-sm">{TESTIMONIALS[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button onClick={prev} className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${active === i ? 'w-6 bg-violet-500' : 'bg-white/20'}`} 
                />
              ))}
            </div>
            <button onClick={next} className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6"
        >
          <div className="glass p-4 rounded-2xl flex items-center justify-between shadow-2xl shadow-violet-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center">
                <MousePointer2 className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold">Ready to scale?</div>
                <div className="text-[10px] text-white/50">Book a free strategy call</div>
              </div>
            </div>
            <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-50 transition-all active:scale-95">
              Let's Talk
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Convertic</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              We help ambitious brands turn their digital presence into a high-converting growth engine.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Agency</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs text-white/20">
          <p>© 2024 Convertic Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Results Section */}
      <section id="results" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[48px] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/10 to-transparent" />
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Websites that pay for themselves
                </h2>
                <div className="space-y-6">
                  {[
                    "Average 45% increase in conversion rates",
                    "Optimized for mobile-first indexing",
                    "Built-in SEO and performance best practices",
                    "Seamless integration with your tech stack"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-violet-400" />
                      </div>
                      <span className="text-lg text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-8 rounded-3xl text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-2">3.2x</div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-widest">ROI Increase</div>
                </div>
                <div className="glass p-8 rounded-3xl text-center mt-8">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">-40%</div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-widest">Bounce Rate</div>
                </div>
                <div className="glass p-8 rounded-3xl text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">10k+</div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-widest">Leads Generated</div>
                </div>
                <div className="glass p-8 rounded-3xl text-center mt-8">
                  <div className="text-4xl font-bold text-violet-400 mb-2">99.9</div>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-widest">Perf. Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Ready to turn viewers into buyers?</h2>
          <p className="text-xl text-white/50 mb-12">
            Join 50+ high-growth companies scaling with Convertic.
          </p>
          <button className="px-12 py-6 bg-white text-black rounded-2xl font-bold text-xl hover:bg-violet-50 transition-all shadow-2xl shadow-white/10 active:scale-95">
            Book Your Free Audit
          </button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}
