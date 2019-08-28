import React from 'react';

import Todos from "./todo";

class App extends React.Component {
  state = {
    todos_list : [
      {id:1, content: "buy milk"},
      {id:2, content: "drink milk"},
      {id:3, content: "go out"},
    ]
  }
  render(){
  return (
    [<div className = "p-3 mb-2 bg-warning text-dark "><h1 className="text-center">To-Do List</h1></div>,
    <div className="App">
      < Todos todos = {this.state.todos_list} />
    </div>]
  );
}
}

export default App;
