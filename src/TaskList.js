import React, {Component} from 'react';

export class TaskList extends Component {

    handleRemoveClick =(name) =>{
        this.props.removeTaskCallback(name)
    }

    render(){

        //console.log(this.props.tasks);
    let taskList = this.props.tasks;
    let displayTasks = taskList.map((task) =>
    {
        return(
        <div>
        
        <li>{task} <button onClick ={() => this.handleRemoveClick(task)}>Remove</button></li>
        </div>
    )
    })
    return (
         <ul>{displayTasks}</ul>
    )
      }
        
    }