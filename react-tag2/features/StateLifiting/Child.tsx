import { SetStateAction } from "react"

export default function Child({ parentState, setParentState, handleSwitch }: { parentState: boolean, setParentState: React.Dispatch<SetStateAction<boolean>>, handleSwitch: () => void }) {
    console.log("child renders...")
    //alternative wenn setter als prop kommt!
    function handleSwitchFromChild() {

        setParentState(!parentState)
    }

    const myBorderStyle = parentState ? "1px solid red" : "1px solid green"
    return <div style={{ border: myBorderStyle, margin: 10, padding: 4 }}>
        <button onClick={handleSwitch}>Switch from child</button>
        <h1>Child element</h1>

    </div>
}