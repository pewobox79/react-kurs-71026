'use client'
import { AuthContext } from "@/context/authContext"
import { ChangeEvent, useContext, useState } from "react"

const INIT_VALUES = {
    username: "",
    password: ""
}
export default function LoginForm() {

    const authContext = useContext(AuthContext)
    const [formData, setFormData] = useState<{ username: string, password: string }>(INIT_VALUES)

    function handleFormChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        const validateUserData = ()=>{
            return true
        }
        const payload = { ...formData, isLoggedIn: validateUserData() }
        console.log("payload", payload)
        authContext?.setUser(payload)
    }

    console.log("formData", formData)
    return <section>

        <div className="flex flex-col w-1/2 m-auto border rounded-lg mt-10">
            <h2 className="text-center">Login Form useState</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-3">
                    <label htmlFor="username">Username</label>
                    <input className="border rounded-lg" id="username" name="username" value={formData.username} onChange={handleFormChange} />
                </div>
                <div className="flex flex-col p-3">
                    <label htmlFor="password">Password</label>
                    <input className="border rounded-lg" id="password" name="password" value={formData.password} onChange={handleFormChange} />
                </div>
                <button className="border rounded-lg" type="submit">Login</button>
            </form>
        </div>
    </section>
}