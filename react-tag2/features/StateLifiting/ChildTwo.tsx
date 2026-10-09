import { memo } from "react"
const ChildTwo=()=> {
    console.log("child two renders...")
    return <div style={{border: "1px solid blue"}}>
        <h1>child two</h1>
    </div>
}

export default memo(ChildTwo)