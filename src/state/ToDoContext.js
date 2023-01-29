import React, { Component } from "react";

export const ToDoContext = React.createContext({
    onGet: () => {},
    toggle: () => {},
    todos: [],
    setState: () => {},
})


class ToDoContextProvider extends Component {
  constructor() {
    super()
    this.state = ({
      todos: [],    
    })
  }
   
   addUserHandler (todo) {
    this.setState({
      todos: [...this.state.todos, todo]
      
    })}
  

 

   toggleHandler (id)  {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })}
  
 



componentDidMount() {
  let localTodo = JSON.parse(localStorage.getItem('todos'))
  this.setState({todos: [...localTodo || []]})
}
componentDidUpdate(prevProps, prevState){
  if(this.state.todos !== prevState.todos) {
    localStorage.setItem('todos', JSON.stringify(this.state.todos) )
  }
}

  render() {

    return(
        <ToDoContext.Provider value={{
          onGet: this.addUserHandler.bind(this),
          todos: this.state.todos,
          toggle: this.toggleHandler.bind(this),
          setState: this.setState.bind(this),
          
        }}
        
        >{this.props.children}</ToDoContext.Provider>
    )
  }
}

export default ToDoContextProvider;

