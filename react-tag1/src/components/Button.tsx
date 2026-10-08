import type { ReactNode } from "react"

type ButtonProps = {
    label: string, 
    action: () => void, 
    variant?: string
    children?: ReactNode
}

const Button =(props:ButtonProps)=>{

    const {label, action, children} = props
    const customLabel = label.length >= 1 ? label : "Click me"
    console.log("props in button", props)
    return <button onClick={action}>{children ? children : customLabel}</button>
}

export default Button