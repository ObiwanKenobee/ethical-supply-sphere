
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import SignupForm from "@/components/auth/SignupForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Signup = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect to appropriate dashboard
    if (currentUser) {
      if (currentUser.role === "admin") {
        navigate("/admin-dashboard");
      } else if (currentUser.role === "supplier") {
        navigate("/supplier-dashboard");
      } else if (currentUser.role === "investor") {
        navigate("/investor-dashboard");
      } else {
        navigate("/business-dashboard");
      }
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
            Create Your Guardian-IO Account
          </h1>
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
