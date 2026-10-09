'use client'
import { ReactNode, useContext, useState } from "react"
import UserItem, { UserItemProps } from "./UserItem"
import { useFetch } from "@/hooks/useFetch"
import { AuthContext } from "@/context/authContext"


export default function Users({ children }: { children: ReactNode }) {
    console.log("users feature, vor effect")

    const authContext = useContext(AuthContext)

    //const [users, setUsers] = useState<UserItemProps[]>([])

    function changeLoggedInState(){
        authContext?.setUser({ ...authContext.user, isLoggedIn: !authContext.user.isLoggedIn
})
    }
    const { data, error, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users', "GET")
    const users = data as UserItemProps[]
    /*  useEffect(() => {
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
    
        }, [state]) */
    console.log("nach effect....", users)

    if (isLoading) {
        return <h1>User list ist loading...</h1>
    }

    if (error) {
        return <div>{JSON.stringify(error)}</div>
    }

    const UserList = users.map(user => {
        const myObj = { ...user }
        return <UserItem key={user.id} {...myObj} />
    })
    return <section id="users-feature">
        <div>
            <button onClick={changeLoggedInState}>Change User LoggedinState</button>
            {children}
            {UserList}
        </div>
    </section>
}