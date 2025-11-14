// This is the Parent Component here we'll send the component to child
import Child from "./Child";

function Parent(){
    return (
        <div>
            <Child parentMessage="I am your parent"/>
        </div>
    )
}
