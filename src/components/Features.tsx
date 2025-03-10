
import { ShieldCheck, BarChart3, FileCheck, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature = ({ icon, title, description, delay = 0 }: FeatureProps) => (
  <AnimatedSection 
    className="p-6 rounded-xl glass-card hover:shadow-lg transition-all duration-300" 
    delay={delay}
  >
    <div className="rounded-lg bg-guardian-50 dark:bg-guardian-900/20 p-3 w-12 h-12 flex items-center justify-center text-guardian-600 dark:text-guardian-400 mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">{title}</h3>
    <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
  </AnimatedSection>
);

const Features = () => {
  return (
    <section id="features" className="section">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Transform Your Supply Chain
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          Guardian-IO combines cutting-edge technology with ethical sourcing principles to create a new paradigm in small business supply chains.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <Feature
          icon={<ShieldCheck size={24} />}
          title="Ethical Supply Chain"
          description="Real-time tracking and blockchain verification ensure transparency and authenticity in your entire supply chain."
          delay={100}
        />
        <Feature
          icon={<BarChart3 size={24} />}
          title="AI-Powered Forecasting"
          description="Predictive analytics for inventory optimization and automated order recommendations based on market trends."
          delay={200}
        />
        <Feature
          icon={<FileCheck size={24} />}
          title="Smart Contracts"
          description="Secure, transparent transactions between buyers and ethical suppliers with automated dispute resolution."
          delay={300}
        />
        <Feature
          icon={<Users size={24} />}
          title="Supplier Network"
          description="Connect directly with verified ethical suppliers through our decentralized peer-to-peer network."
          delay={400}
        />
      </div>

      <AnimatedSection className="mt-16 bg-guardian-50 dark:bg-guardian-900/20 rounded-xl p-8 text-center" delay={500}>
        <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-4">
          Join 5,000+ Small Businesses Transforming Their Supply Chains
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-3xl mx-auto">
          From local artisans to growing manufacturers, businesses of all sizes are experiencing the benefits of ethical, transparent supply chains.
        </p>
        <button className="px-6 py-3 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow">
          Start Your Transformation
        </button>
      </AnimatedSection>
    </section>
  );
};

export default Features;
