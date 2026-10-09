'use client'
import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import { useContext } from "react";

export default function Navigation(){

    const authContext = useContext(AuthContext)
    console.log("authc", authContext)
    function handleLogout(){
        console.log("logout triggers")
        authContext?.setUser({...authContext.user, isLoggedIn: false})
    }
    return <nav className="min-h-20 flex justify-between">
       <div className="flex">
            <Link className="border rounded-lg flex justify-center items-center p-3 m-2" href="/">
                Home
            </Link>
            <Link className="border rounded-lg flex justify-center items-center p-3 m-2" href="/abc">
                ABC
            </Link>
            <Link className="border rounded-lg flex justify-center items-center p-3 m-2" href="/users">
                Users
            </Link>
            <Link className="border rounded-lg flex justify-center items-center p-3 m-2" href="/article/new">
                Neuer Artikel
            </Link>
       </div>
       <div>
            <div onClick={handleLogout} className="border rounded-lg flex justify-center items-center p-3 m-2">Logout</div>
       </div>
    </nav>
}