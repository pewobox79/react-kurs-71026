import { AuthContext } from "@/context/authContext"
import { useContext, useState } from "react"

export type UserItemProps = {
    username: string
    email: string
    website: string
    id:number

}

export default function UserItem({ username,email, website }: UserItemProps) {

    const authContext = useContext(AuthContext)

    console.log("context", authContext)
    const [read, setRead] = useState<boolean>(false)
    function handleRead() {
        setRead(!read)
    }

    const inlineStyle = {
        border: `1px solid ${read ? "red" : "lightgrey"}`,
        //border: read ? "2px solid red" : "1px solid lightgrey",
        padding: 10,
        marginBottom: 5
    }
    return <div style={inlineStyle}>
        <p>Username: {username} </p>
        <p>Email: {email} </p>
        <p>Website: {website} </p>
        <button onClick={handleRead}>mark as {read ? "un-read" : "read"}</button>
    </div>
}