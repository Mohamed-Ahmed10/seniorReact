import React from "react";

var myName = "Mohamed";
class TestComponent extends React.Component{
    render()
    {
        return(<div>test from class based component  {myName}</div>)
    }
}

export default TestComponent;