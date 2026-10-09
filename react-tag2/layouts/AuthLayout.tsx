'use client'

import { ReactNode, useState } from "react"
import { AuthContext } from "@/context/authContext"

export default function AuthLayout({ children }: { children: ReactNode }) {

    const [user, setUser] = useState({username: "", password: "", isLoggedIn: false});
    
    return <AuthContext value={{ user, setUser }}>
        <div className="border-3">
            {children}
        </div>
    </AuthContext>
}