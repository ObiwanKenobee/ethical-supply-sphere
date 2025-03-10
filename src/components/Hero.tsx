
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto grid-bg">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full bg-guardian-100 dark:bg-guardian-900/30 text-guardian-600 dark:text-guardian-400 text-sm font-medium">
              Ethical Supply Chain Revolution
            </span>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white text-balance leading-tight">
            The Future of{" "}
            <span className="relative text-guardian-600 dark:text-guardian-400 glow">
              Ethical Supply Chains
            </span>{" "}
            for Small Businesses
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto text-balance">
            Guardian-IO transforms traditional supply chains into regenerative, ethical, and tech-driven ecosystems, empowering small businesses with transparency and sustainability.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
              <span>Get Started</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 border border-neutral-200 dark:border-neutral-800 hover:border-guardian-300 dark:hover:border-guardian-700 text-neutral-800 dark:text-neutral-200 rounded-md transition flex items-center justify-center">
              <span>Schedule Demo</span>
            </button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400} animation="fade-in">
          <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl glass-card max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-guardian-600/10 to-guardian-300/10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=2069&auto=format&fit=crop"
              alt="Ethical Supply Chain Dashboard"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={500} className="mt-12">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_logo.svg" alt="Microsoft" className="h-6 md:h-8 opacity-50 hover:opacity-75 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 md:h-8 opacity-50 hover:opacity-75 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5 md:h-7 opacity-50 hover:opacity-75 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-5 md:h-7 opacity-50 hover:opacity-75 transition" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6 md:h-8 opacity-50 hover:opacity-75 transition" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
