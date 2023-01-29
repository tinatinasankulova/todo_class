import style from './ToDo.module.css'
import { Component } from "react";
import Card from './ui/card/Card';
import { ToDoContext } from "../state/ToDoContext";
import Button from './ui/button/Button';

class ToDos extends Component {

static contextType = ToDoContext;

constructor(){
  super()
  this.onDeleteHandler = this.onDeleteHandler.bind(this)
}
onDeleteHandler(event) {
  const filterdToDo = this.context.todos.filter(todo => todo.id !== event.target.id)
  this.context.setState({todos: [...filterdToDo]})
}


render() {
  console.log(this.context);
  return (
    <Card className={style.wrapper}>
      {this.context.todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li className={todo.completed ? style["checked-todo"] : ""}
            >
              <input
                type="checkbox"
                id={todo.id}
                onClick={() => this.context.toggle(todo.id)}
                defaultChecked={todo.completed}
              />
              {todo.todos}
              <div className={style.date}>{todo.date}</div>
            </li>
            <Button id={todo.id} onClick={this.onDeleteHandler}>DELETE</Button>
          </ul>
        );
      })}
    </Card>
  );
};
};

export default ToDos;