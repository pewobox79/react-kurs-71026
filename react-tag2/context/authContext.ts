import { createContext } from "react";

type UserType = {
    username: string,
    password: string
    isLoggedIn: boolean,
}
type AuthContextTypes = {
    user: UserType
    setUser: React.Dispatch<React.SetStateAction<UserType>>
} 
export const AuthContext = createContext<AuthContextTypes | null>(null)