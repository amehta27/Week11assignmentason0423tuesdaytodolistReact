import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import {TaskList} from './TaskList.js'
import {CompletedTask} from './CompletedTask.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      tasks:[],
      completedTasks:[],
    }
  }
handleTextChange = (e) => {
  let value = e.target.value
  this.setState({
    name : value
  },()=> {
    console.log(this.state.name)

  })
}
handleAddClick = () => {
    // console.log(this.state.name)

     let name = this.state.name
     this.setState({
      tasks: this.state.tasks.concat(name)
    
  
})
}

  // console.log(this.state.name)
  // console.log("Hello world")
removeTask = (name) =>{
  console.log("remove task in app.js")
  console.log(name)


this.setState({
  tasks : this.state.tasks.filter((item) => item != name)

})
this.setState({
  completedTasks :this.state.completedTasks.concat(name)

 })
}
// addTask = (name) => {
//   console.log("add task on completed task")
//   console.log(name)
// this.setState({
  

// })
// }








render() {
  return(
    <div>
    <h1>App Componen</h1>
    <input onChange={this.handleTextChange} type='text'></input>
    <button onClick={this.handleAddClick}>Add</button>
    <h1>Pending Tasks</h1>
    <TaskList tasks={this.state.tasks} removeTaskCallback={this.removeTask}/>
    <h1>CompletedTask</h1>
    <CompletedTask completedTasks ={this.state.completedTasks}/>
    </div>
   )
}
}
export default App;
