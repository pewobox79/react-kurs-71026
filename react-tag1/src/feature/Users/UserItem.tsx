import { useState, type ReactNode } from "react"
import styles from '../../styles/Users.module.css'

type UserItemProps = {
    name: string
    age: number
    height: number
    children?: ReactNode
}

export default function UserItem({ name, age, height, children }: UserItemProps) {
    console.log("styles", styles)
console.log("useritem rendered...", name)
    const [read, setRead] = useState<boolean>(false)

    function handleRead() {
        setRead(!read)
        console.log("read inner func", read, name)
    }

    const inlineStyle = {
        border: `1px solid ${read ? "red": "lightgrey"}`,
        //border: read ? "2px solid red" : "1px solid lightgrey",
        padding: 10,
        marginBottom: 5
    }

    console.log("read out function", read)

    const myStyle = `${styles.border} ${styles["userItemWrapper"]} ${read ? styles.readStyling: ""}`
    
    return <div className={myStyle}>
        <p>Name: {name} </p>
        <p>Alter: {age} Jahre </p>
        <p>Größe: {height} cm </p>
        {children}
        <button onClick={handleRead}>mark as {read? "un-read": "read"}</button>
    </div>
}