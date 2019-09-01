import React from 'react';

import Todos from "./todo";

import Form from "./form";

class App extends React.Component {
  state = {
    todos_list : [
      {id:1, content: "buy milk"},
      {id:2, content: "drink milk"},
      {id:3, content: "go out"},
    ]
  }
  deleteTodo = (id) =>{
    let todos = this.state.todos_list.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos_list: todos
    })
  }
  
  addTodo = (todo) =>{
      todo.id = Math.random();
      let todos = [...this.state.todos_list,todo];
      this.setState({
        todos_list:todos
      })

    }
  render(){
  return (
    [<div className = "p-3 mb-2 bg-warning text-dark "><h1 className="text-center">To-Do List</h1></div>,
    <div className="App">
      < Todos todos = {this.state.todos_list} deleteTodo = {this.deleteTodo} />
      < Form addTodo = {this.addTodo}/>
    </div>]
  );
}
}

export default App;
