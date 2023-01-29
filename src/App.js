
import { Component } from "react";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";

class App extends Component {

  render(){
    return (
      <div>
      <AddToDo/>
      <ToDos/>
      </div>
     
    );
  };
};
export default App;
