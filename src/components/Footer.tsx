
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-guardian-600 text-white p-1.5 rounded-md font-bold text-xl">G</span>
              <span className="font-medium text-lg text-neutral-900 dark:text-white">Guardian-IO</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-md">
              Transforming supply chains for small businesses through ethical sourcing, blockchain verification, and AI-powered analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-guardian-600 dark:text-neutral-400 dark:hover:text-guardian-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-neutral-500 hover:text-guardian-600 dark:text-neutral-400 dark:hover:text-guardian-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-neutral-500 hover:text-guardian-600 dark:text-neutral-400 dark:hover:text-guardian-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-neutral-500 hover:text-guardian-600 dark:text-neutral-400 dark:hover:text-guardian-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-neutral-900 dark:text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Features</a>
              </li>
              <li>
                <a href="#dashboard" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Dashboard</a>
              </li>
              <li>
                <a href="#technology" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Technology</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Security</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-neutral-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Blog</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-guardian-600 dark:hover:text-guardian-400 transition">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Guardian-IO. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 text-sm transition">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 text-sm transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
