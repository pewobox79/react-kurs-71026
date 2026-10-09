'use client'

import { ReactNode, useState } from "react"
import { AuthContext } from "@/context/authContext"

export default function AuthLayout({ children }: { children: ReactNode }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return <AuthContext value={{ isLoggedIn, setIsLoggedIn }}>
        <div className="border-3">
            {children}
        </div>
    </AuthContext>
}