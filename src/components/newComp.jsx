import { useState } from "react";


const NewComp = () => {

    var [myName , setMyName] = useState("Mohamed Ahmed");


    var showConsole = () =>
    {
        console.log("OK");
        setMyName("Hager");
        console.log(myName)
    }
    var change = () =>
    {
        setMyName("Mariem")
    }
    return (
        <div>
            <p>Hello test</p>
            {myName}
            <div></div>
            <button onClick={showConsole}>Click to Hager</button>
            <button onClick={change}>Click to Mariem</button>
        </div>
    );
}
 
export default NewComp;