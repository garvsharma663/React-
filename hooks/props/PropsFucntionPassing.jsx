// We can pass functions also
function App(){
    function ButtonClick(){
        console.log("ButtonClicked");
    }
    return (
        <div><ChildApp buttonText={ButtonClick} /></div> // See how ButtonClick is being retuned here
    )
}

function ChildApp({buttonText}) { // buttonText here is a props passed by parent class
    return (
        <div>
            <button onClick={buttonText}>Click Me</button>
        </div>
    )
}
