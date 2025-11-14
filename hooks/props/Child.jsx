// Here we'll export a component
function Child({parentMessage}){
    return (
        <div>
            <h1>Hello {parentMessage}</h1>
        </div>
    )
}
export default Child;