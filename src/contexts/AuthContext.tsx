
import { createContext, useContext, useEffect, useState } from "react";
import { 
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "@/lib/firebase";

type UserRole = "admin" | "supplier" | "business" | "investor";

interface AuthUser extends User {
  role?: UserRole;
}

interface AuthContextType {
  currentUser: AuthUser | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string, role: UserRole) => Promise<UserCredential>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function signup(email: string, password: string, role: UserRole) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // In a real app, we would store the role in Firestore or a custom claims
        const user = result.user as AuthUser;
        user.role = role;
        return result;
      });
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // In a real app, we would fetch the role from Firestore or custom claims
        // For demo purposes, we'll determine role based on email
        const user = result.user as AuthUser;
        if (email === "admin@guardian.io") {
          user.role = "admin";
        } else if (email === "supplier@guardian.io") {
          user.role = "supplier";
        } else if (email === "business@guardian.io") {
          user.role = "business";
        } else if (email === "investor@guardian.io") {
          user.role = "investor";
        } else {
          user.role = "business"; // Default role
        }
        return result;
      });
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // In a real app, we would fetch the role from Firestore or custom claims
        const authUser = user as AuthUser;
        
        // For demo purposes, set role based on email
        if (user.email === "admin@guardian.io") {
          authUser.role = "admin";
        } else if (user.email === "supplier@guardian.io") {
          authUser.role = "supplier";
        } else if (user.email === "business@guardian.io") {
          authUser.role = "business";
        } else if (user.email === "investor@guardian.io") {
          authUser.role = "investor";
        } else {
          authUser.role = "business"; // Default role
        }
        
        setCurrentUser(authUser);
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
