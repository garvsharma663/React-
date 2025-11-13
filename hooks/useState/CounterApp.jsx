import React, {useState} from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);
    function updateCount() {
        setCount(count + 1);
    }
    function resetCount() {
        setCount(0);
    }
    return (
        <div>
            <h1>WELCOME TO COUNTER APP</h1>
            <h2>{count}</h2>
            <button onClick={resetCount}>Reset</button>
            <button onClick={updateCount}>Update The Count</button>
        </div>
    )
}
export default CounterApp;