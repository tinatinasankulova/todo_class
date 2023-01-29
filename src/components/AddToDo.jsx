import { Fragment } from 'react';
import style from './AddToDo.module.css';
import Card from './ui/card/Card';
import { Component } from 'react';
import Button from './ui/button/Button';
import ErrorModal from './ui/modal/ErrorModal';
import { ToDoContext } from '../state/ToDoContext';


class AddToDo extends Component {
 
static contextType = ToDoContext;

constructor(){
  super()
  this.state = {
    inputValue: '',
    error:null,
  }
  this.inputChangeHandler = this.inputChangeHandler.bind(this)
}
inputChangeHandler(event) {
  this.setState({
    ...this.state,
    inputValue: event.target.value})
}

submithandler(event) { 
  event.preventDefault()
  if(this.state.inputValue.trim().length === 0) {
    this.setState({
      ...this.state,
      error: {
        title: 'Invaid value, inputs should not be empty!',
        message: 'Please, type something !'
      }
    })
    return
    }

  const data = {
    todos: this.state.inputValue,
    id: Math.random().toString(),
    date: new Intl.DateTimeFormat('ru-RU').format(),
    completed: false,
  }

  this.context.onGet(data)

  
  this.setState({
    ...this.state,
    inputValue: ''
  })
  
}

closeHandler() {
  this.setState({
    ...this.state,
    error: null,
  })
}

render() {
  return (
  <Fragment>
    {this.state.error && <ErrorModal message={this.state.error.message} title={this.state.error.title}  onConfirm={this.closeHandler.bind(this)}/>}
    <Card className={style.card}>
      <h1>Let's do it</h1>
      <form onSubmit={this.submithandler.bind(this)}>
        <input type="text" placeholder='Gonna do...' onChange={this.inputChangeHandler} value={this.state.inputValue}/>
        <Button>Add ToDo</Button>
      </form>
    </Card>
  </Fragment>
  )
}
}

export default AddToDo;








