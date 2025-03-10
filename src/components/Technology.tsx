
import AnimatedSection from "./AnimatedSection";

const Technology = () => {
  return (
    <section id="technology" className="section">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Powered by Cutting-Edge Technology
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          Guardian-IO leverages advanced technologies to create a seamless, secure, and transparent supply chain ecosystem.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <AnimatedSection animation="fade-up" className="glass-card rounded-xl p-8 relative overflow-hidden" delay={100}>
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-guardian-100 dark:bg-guardian-900/20 rounded-full blur-3xl opacity-70"></div>
          <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-4 relative z-10">Blockchain-Based Verification</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 relative z-10">
            Our Ethereum-based smart contracts ensure every transaction is secure, transparent, and tamper-proof. Verify the authenticity of suppliers and products with immutable blockchain records.
          </p>
          <div className="rounded-lg overflow-hidden relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop" 
              alt="Blockchain Technology" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" className="glass-card rounded-xl p-8 relative overflow-hidden" delay={200}>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-guardian-100 dark:bg-guardian-900/20 rounded-full blur-3xl opacity-70"></div>
          <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-4 relative z-10">AI-Powered Analytics</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 relative z-10">
            Advanced machine learning algorithms analyze market trends, predict demand fluctuations, and optimize inventory levels. Make data-driven decisions with our sophisticated AI engine.
          </p>
          <div className="rounded-lg overflow-hidden relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1974&auto=format&fit=crop" 
              alt="AI Analytics" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fade-up" className="glass-card rounded-xl p-8 md:p-10 relative overflow-hidden" delay={300}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-4">
              Our Technology Stack
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Guardian-IO is built on a robust, scalable architecture designed for performance and security.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-600">
                    <path fill="currentColor" d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.89,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">Node.js Backend</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Scalable, non-blocking server architecture</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-400">
                    <path fill="currentColor" d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">React Frontend</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Component-based UI with Vite and TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-teal-500">
                    <path fill="currentColor" d="M16.71 5.29L19.36 2.64C21.05 4.34 22 6.57 22 9C22 11.43 21.05 13.66 19.36 15.36L16.71 12.71C17.53 11.88 18 10.73 18 9.5C18 8.27 17.53 7.12 16.71 6.29M15.54 4.12L12.88 6.78C12.3 6.27 11.55 6 10.75 6C8.68 6 7 7.68 7 9.75C7 10.55 7.27 11.3 7.78 11.88L5.12 14.54C4.41 13.23 4 11.66 4 10C4 5.58 7.58 2 12 2C13.66 2 15.23 2.41 16.54 3.12M11.12 9.22C11.12 9.59 11.41 9.88 11.78 9.88S12.44 9.59 12.44 9.22 12.15 8.56 11.78 8.56 11.12 8.85 11.12 9.22M4.12 16.54L6.78 13.88C7.3 14.4 8.05 14.67 8.85 14.67C10.92 14.67 12.6 12.99 12.6 10.92C12.6 10.12 12.33 9.37 11.82 8.79L14.54 6.12C15.23 7.43 15.64 9 15.64 10.66C15.64 15.08 12.06 18.66 7.64 18.66C6 18.66 4.43 18.25 3.12 17.54M7.64 19.83C4.19 19.83 1.17 18.23 0 15.8L1.54 14.96C2.35 16.63 4.3 17.66 6.47 17.66C7.5 17.66 8.28 17.42 8.86 17.18L10.04 18.36C9.29 19.18 8.36 19.83 7.64 19.83M9.9 18.08L8.71 16.89C9 16.71 9.25 16.53 9.5 16.28L10.72 17.5C10.47 17.75 10.22 17.93 9.9 18.08Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">Ethereum Blockchain</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Solidity smart contracts for verification</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500">
                    <path fill="currentColor" d="M3.05 13H1V11H3.05C3.5 6.83 6.83 3.5 11 3.05V1H13V3.05C17.17 3.5 20.5 6.83 20.95 11H23V13H20.95C20.5 17.17 17.17 20.5 13 20.95V23H11V20.95C6.83 20.5 3.5 17.17 3.05 13M12 5C8.13 5 5 8.13 5 12S8.13 19 12 19 19 15.87 19 12 15.87 5 12 5M11.13 17.25H12.88V15.5H11.13V17.25M12 6.75C10.07 6.75 8.5 8.32 8.5 10.25H10.25C10.25 9.28 11.03 8.5 12 8.5S13.75 9.28 13.75 10.25C13.75 12 11.13 11.78 11.13 14.63H12.88C12.88 12.66 15.5 12.44 15.5 10.25C15.5 8.32 13.93 6.75 12 6.75Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white">TensorFlow.js</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">AI-powered analytics and forecasting</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full">
            <div className="glass-card rounded-xl overflow-hidden shadow-lg h-full">
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2">Code Example</span>
              </div>
              <div className="bg-neutral-900 text-neutral-200 p-6 font-mono text-sm overflow-auto h-full">
                <span className="text-blue-400">const</span> <span className="text-green-400">verifySupplier</span> <span className="text-neutral-200">=</span> <span className="text-orange-400">async</span> <span className="text-neutral-200">(</span><span className="text-purple-400">supplierId</span><span className="text-neutral-200">) =></span> <span className="text-neutral-200">{'{'}</span>
                <br />
                {'  '}<span className="text-blue-400">try</span> <span className="text-neutral-200">{'{'}</span>
                <br />
                {'    '}<span className="text-blue-400">const</span> <span className="text-green-400">contract</span> <span className="text-neutral-200">=</span> <span className="text-blue-400">await</span> <span className="text-green-400">ethers</span><span className="text-neutral-200">.</span><span className="text-green-400">getContractAt</span><span className="text-neutral-200">(</span><span className="text-orange-400">"SupplierRegistry"</span><span className="text-neutral-200">, </span><span className="text-orange-400">REGISTRY_ADDRESS</span><span className="text-neutral-200">);</span>
                <br />
                {'    '}<span className="text-blue-400">const</span> <span className="text-green-400">supplier</span> <span className="text-neutral-200">=</span> <span className="text-blue-400">await</span> <span className="text-green-400">contract</span><span className="text-neutral-200">.</span><span className="text-green-400">getSupplier</span><span className="text-neutral-200">(</span><span className="text-green-400">supplierId</span><span className="text-neutral-200">);</span>
                <br />
                {'    '}
                <br />
                {'    '}<span className="text-green-400">console</span><span className="text-neutral-200">.</span><span className="text-green-400">log</span><span className="text-neutral-200">(</span><span className="text-orange-400">"Supplier verified:"</span><span className="text-neutral-200">, </span><span className="text-green-400">supplier</span><span className="text-neutral-200">);</span>
                <br />
                {'    '}<span className="text-blue-400">return</span> <span className="text-neutral-200">{'{'}</span>
                <br />
                {'      '}<span className="text-green-400">verified</span><span className="text-neutral-200">:</span> <span className="text-green-400">supplier</span><span className="text-neutral-200">.</span><span className="text-green-400">status</span> <span className="text-neutral-200">===</span> <span className="text-orange-400">"VERIFIED"</span><span className="text-neutral-200">,</span>
                <br />
                {'      '}<span className="text-green-400">ethicalScore</span><span className="text-neutral-200">:</span> <span className="text-green-400">supplier</span><span className="text-neutral-200">.</span><span className="text-green-400">ethicalScore</span><span className="text-neutral-200">,</span>
                <br />
                {'      '}<span className="text-green-400">certifications</span><span className="text-neutral-200">:</span> <span className="text-green-400">supplier</span><span className="text-neutral-200">.</span><span className="text-green-400">certifications</span>
                <br />
                {'    '}<span className="text-neutral-200">};</span>
                <br />
                {'  '}<span className="text-neutral-200">} </span><span className="text-blue-400">catch</span><span className="text-neutral-200"> (</span><span className="text-green-400">error</span><span className="text-neutral-200">) {</span>
                <br />
                {'    '}<span className="text-green-400">console</span><span className="text-neutral-200">.</span><span className="text-green-400">error</span><span className="text-neutral-200">(</span><span className="text-orange-400">"Error verifying supplier:"</span><span className="text-neutral-200">, </span><span className="text-green-400">error</span><span className="text-neutral-200">);</span>
                <br />
                {'    '}<span className="text-blue-400">throw</span> <span className="text-blue-400">new</span> <span className="text-green-400">Error</span><span className="text-neutral-200">(</span><span className="text-orange-400">"Supplier verification failed"</span><span className="text-neutral-200">);</span>
                <br />
                {'  '}<span className="text-neutral-200">}</span>
                <br />
                <span className="text-neutral-200">};</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Technology;
