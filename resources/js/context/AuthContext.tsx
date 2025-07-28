import { createContext, useContext, useState, ReactNode } from "react";

type User = {
 name: string;
 initial: string;
 image?: string;
};

type AuthContextType = {
 user: User | null;
 login: (user: User) => void;
 logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
 const [user, setUser] = useState<User | null>({
  name: "Frank",
  initial: "F",
  image: "https://i.pravatar.cc/150?img=3", // ou récupérée de Laravel
 });

 const login = (user: User) => setUser(user);
 const logout = () => setUser(null);

 return (
  <AuthContext.Provider value={{ user, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
}

export function useAuth() {
 const context = useContext(AuthContext);
 if (!context) throw new Error("useAuth must be used within AuthProvider");
 return context;
}
