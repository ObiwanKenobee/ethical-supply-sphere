
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "admin" | "supplier" | "business" | "investor";
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { currentUser, isLoading } = useAuth();

  // Check if user is authenticated
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Check if user has the required role
  if (requiredRole && currentUser.role !== requiredRole) {
    // Redirect to appropriate dashboard based on actual role
    if (currentUser.role === "admin") {
      return <Navigate to="/admin-dashboard" />;
    } else if (currentUser.role === "supplier") {
      return <Navigate to="/supplier-dashboard" />;
    } else if (currentUser.role === "investor") {
      return <Navigate to="/investor-dashboard" />;
    } else {
      return <Navigate to="/business-dashboard" />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
