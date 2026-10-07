type ButtonProps ={
    label: string, 
    action: () => void, 
    variant?: string
}

const Button =(props:ButtonProps)=>{

    const {label} = props
    console.log("props in button", props)
    return <button>{label}</button>
}

export default Button