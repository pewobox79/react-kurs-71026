'use client'
import { ReactNode, useEffect, useState } from "react"
import UserItem, { UserItemProps } from "./UserItem"


export default function Users({ children }: { children: ReactNode }) {
    console.log("users feature, vor effect")

    const [state, setState] = useState(false)
    const [users, setUsers] = useState<UserItemProps[]>([])

    useEffect(() => {
        console.log("effect runs...")

        const effectRoot = document.getElementById("effectRoot")
        const h1 = document.createElement("h1")
        h1.innerText = "Ich bin aus dem Effect"
        if (effectRoot) {
            effectRoot.append(h1)
        }
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))

        //cleanup
        return () => {
            console.log("cleanup runs....")
            h1.remove()
        }

    }, [state])

    const UserList = users.map(user => {
        const myObj = { ...user }
        return <UserItem key={user.id} {...myObj} />
    })

    console.log("nach effect....", users)

    return <section id="users-feature">
        <div>
            <button onClick={() => setState(!state)}>click</button>
            {children}
            {UserList}
        </div>
    </section>
}