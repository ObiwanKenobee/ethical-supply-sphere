
import AnimatedSection from "./AnimatedSection";

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="section overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection animation="slide-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Intuitive Dashboard for Complete Visibility
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            Monitor your entire supply chain with our comprehensive dashboard that provides real-time insights, analytics, and supplier information at your fingertips.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-guardian-100 dark:bg-guardian-900/30 p-2 text-guardian-600 dark:text-guardian-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">Real-time Supply Chain Monitoring</h4>
                <p className="text-neutral-600 dark:text-neutral-300">Track inventory, shipments, and supplier activities with up-to-the-minute accuracy.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-guardian-100 dark:bg-guardian-900/30 p-2 text-guardian-600 dark:text-guardian-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">Ethical Supplier Verification</h4>
                <p className="text-neutral-600 dark:text-neutral-300">Ensure all suppliers meet ethical standards with our blockchain-verified data.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-guardian-100 dark:bg-guardian-900/30 p-2 text-guardian-600 dark:text-guardian-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">Predictive Analytics</h4>
                <p className="text-neutral-600 dark:text-neutral-300">AI-powered insights help you anticipate market changes and optimize inventory.</p>
              </div>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-guardian-600 hover:bg-guardian-700 text-white rounded-md transition shadow-sm hover:shadow">
            Explore Dashboard
          </button>
        </AnimatedSection>
        
        <AnimatedSection animation="slide-in-right" className="relative">
          <div className="relative mx-auto glass-card rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="absolute inset-0 bg-gradient-to-r from-guardian-600/5 to-guardian-300/5 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Guardian-IO Dashboard" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md p-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">Supply Chain Health</h4>
                  <p className="text-xs text-guardian-600 dark:text-guardian-400">92% Ethical Compliance</p>
                </div>
                <div className="h-2 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-guardian-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 glass-card p-4 rounded-lg shadow-lg max-w-[200px] animate-float">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-neutral-900 dark:text-white">New Supplier</span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">Organic Cotton Co. has joined your network with 98% ethical rating.</p>
          </div>
          
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 glass-card p-4 rounded-lg shadow-lg max-w-[200px] animate-float" style={{ animationDelay: "2s" }}>
            <h4 className="text-xs font-medium text-neutral-900 dark:text-white mb-2">Shipment Update</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">Order #2859 is in transit and on schedule for delivery.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DashboardPreview;
