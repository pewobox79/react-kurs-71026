import { createContext } from "react";

type AuthContextTypes = {
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthContext = createContext<AuthContextTypes| null>(null)