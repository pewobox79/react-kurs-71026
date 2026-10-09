
'use client'
import { AuthContext } from "@/context/authContext"
import { useContext, useRef } from "react"

export default function LoginFormRef() {

    const authContext = useContext(AuthContext)
    
    const username = useRef(null)
    const password = useRef(null)

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()
    
        const validateUserData = ()=>{
            return true
        }
        console.log("useRef password",  )
        const payload = { username: username?.current?.value, password: password?.current?.value, isLoggedIn: validateUserData() }
        console.log("payload", payload)
        authContext?.setUser(payload)
    }

    return <section>

        <div className="flex flex-col w-1/2 m-auto border rounded-lg mt-10">
            <h2 className="text-center">Login Form mit useRef</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-3">
                    <label htmlFor="username">Username</label>
                    <input className="border rounded-lg" id="username" name="username" ref={username} />
                </div>
                <div className="flex flex-col p-3">
                    <label htmlFor="password">Password</label>
                    <input className="border rounded-lg" id="password" name="password" ref={password} />
                </div>
                <button className="border rounded-lg" type="submit">Login</button>
            </form>
        </div>
    </section>
}