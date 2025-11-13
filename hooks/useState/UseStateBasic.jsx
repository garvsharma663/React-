import React, { useState } from "react"; // Basic import of useState Hook from React Library.

function UseStateBasic() {
    // Now let's get familiar with the syntax and it's purpose...

    // 1.) const [currentValue, updateCurrentValue] = useState(<currentValueType with optional current value>)
    // a. currentValueType ---> use ("") for String/Text.
    // b. use({}) for objects such as JSON.

    // After this updateValue function is called, a page reload function is also called.

    const [currentValue, updateValue] = useState("After 'A' comes" ); // For String
    const [currentBoolean, setCurrentBoolean] = useState(true); // For Boolean
    const [currentObject, setCurrentObject] = useState({}); // Yk it now.

    // That's it...
    // Now for fetching API, we'll deal with it later just see the basic HTML being rendered as I returned it below.
    function updateText(){
        updateValue("B...")
    }
    return (
        <div>
            <h1>Use State Basic</h1>
            <h2>The current Text is : {currentValue}</h2>
            <button onClick={updateText}>Update</button>
        </div>
    )
}
export default UseStateBasic;
