import React from "react";


class TestComponent extends React.Component{

    myName ="Mohamed";

    state = {
            gender : "Male",
            age : 60  ,
            study : "Graduate"
    }
    // changeData = () =>
    // {
    //     this.setState({
    //         name : "Hager",
    //         gender:"Female",
    //         age : 25
    //     })
    // }
    render()
    {
        return(
        <div>
            <p>My name is :{this.myName}</p>
            <div>{this.state.name ? this.state.name :"No name"}</div>
            <div>{this.state.gender}</div>
            <div>
                {this.state.age > 18 
                    ? <div>{this.state.study}</div>
                    : <div>Not allowd</div>
                }
            </div>
            <button onClick={this.changeData}>Change</button>
        </div>
        )
    }
}

export default TestComponent;