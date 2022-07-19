import React from "react";
import "../App.scss";

class Data extends React.Component{

    state = {
        courses : [
            {name : "HTML" , order: 1 , contains :"Tags" , status : "finished"},
            {name : "CSS" , order: 2 , contains :"poperty" , status : "finished"},
            {name : "JS" , order: 3 , contains :"methods" , status : "finished"},
            {name : "json" , order: 4 , contains :"components" , status : "not started"},
            {name : "React" , order: 5 , contains :"components" , status : "un finished"},
        ]
    }

    render()
    {
        return(
        <div>
                {
                    this.state.courses.map(course =>
                        {
                            return(
                                <div key={course.order} className="course">
                                    <div>{course.name}</div>
                                    <div>{course.contains}</div>
                                    <div>{course.order}</div>
                                    <div>{course.status}</div>
                                    <hr />
                                </div>
                            )
                        })
                }
        </div>
        )
    }
}

export default Data;