import React, {useState, useEffect} from 'react';

function CounterAppPart2() {
    const [value, setValue] = useState(0);
    // Now see React when any useState val changes it reloads all the components again.
    // but there are some cases where we need to do something after the reload before etc.
    // Such as logging/ debugging, fetching data, save the data to the DB, etc.
    useEffect(() => {
        console.log("Counter App started")
    }, []) // This [] makes the useEffect runs only one time (a use case ? like fetching the data from backend.)
    // We can add dependencies here also.
    // HOW??
    // Suppose we only want useEffect to run when certain something changes, for example -->
    // Our counter value so we'll use this

    useEffect(()=>{
        console.log("Counter Updated to "+value)
        }, [value] // Now whenever counter updates, this useEffect will be updated.
    )

    function updateValue(){
        setValue(value=>value + 1);
    }

    function resetValue(){
        setValue(0);
    }

    return (
        <div>
            <h1>WELCOME TO COUNTER APP</h1>
            <h2>{value}</h2>
            <button onClick={updateValue}>Update Counter</button>
            <button onClick={resetValue}>Reset Counter</button>
        </div>
    )
}
export default CounterAppPart2;