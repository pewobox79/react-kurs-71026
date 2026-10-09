'use client'
import { lazy, useState } from "react";
import Child from "./Child";

const ChildTwoElement = lazy(()=> import('@/features/StateLifiting/ChildTwo'))

export default function Parent() {
    console.log("parent renders...")
    const [parentState, setParentState] = useState(false)
    const myBorderStyle = parentState ? "1px solid green" : "1px solid red"

    function handleSwitch() {
        setParentState(!parentState)
    }
    return <div style={{ border: myBorderStyle, margin: 10, padding: 4 }}>
        <h1>parent element</h1><button onClick={handleSwitch}>Switch</button>
        <Child
            parentState={parentState}
            setParentState={setParentState}
            handleSwitch={handleSwitch}
        />
        <ChildTwoElement />
    </div>
}