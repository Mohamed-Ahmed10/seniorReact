import React from "react";
import { FormControl } from "react-bootstrap";

class Todo extends React.Component
{
    
    tasks = [
        {text : "Task One"},
        {text : "Task two"},
    ]

    handleAdd = () =>
    {
        let taskInput = document.getElementById('taskInput');
        let tasks = document.getElementById('tasks');
        
        let newTask = `<li>${taskInput.value}</li>`;
        tasks.appendChild(newTask)
    } 
    handleDelete = (event) =>
    {
        event.target.parentNode.remove()
    }
    render()
    {
        return(
            <div className="container">
                <label>New task</label>
                <FormControl type="text" id="taskInput"/> <br />
                <button 
                    className="btn btn-primary"
                    onClick={this.handleAdd}
                    > Add</button>
                <ul id="tasks">
                    {this.tasks.map((task, index) =>
                            <li key={index}>
                                {task.text}
                                <button 
                                    className="btn btn-danger"
                                    id={`task${index+1}`}
                                    onClick={this.handleDelete}
                                    >Done</button>
                            </li>
                            
                        )}
                        {/* {this.state.tasks.forEach( task => task)} */}
                </ul>
            </div>
        )
    }
}

export default Todo;