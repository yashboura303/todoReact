import React from 'react';

class Todo extends React.Component{
    
    render(){
        
        const {todos} = this.props
        let todoList = []
        if (todos.length === 0){
            todoList.push(<p className ="text-center font-weight-bold text-danger text-uppercase">no todos left</p>)
        }
        else{
            todoList = todos.map(todos =>{
                return (
                    <div className="container">
                    <div className ="container border border-dark rounded-pill mt-3 mb-2 p-3 bg-dark clearfix" key={todos.id}>
                    <p className="float-left text-white font-weight-bold">Task: { todos.content } </p>
                    <button className = "float-right btn btn-outline-danger" onClick = {() => this.props.deleteTodo(todos.id)}>Delete</button>
                    </div>
                    </div>
                )
            });

        }

    return(
        // [<div className="text-center m-4"><button className="btn btn-outline-success" >Add New To-Do</button></div>,
        <div className="todo-list">
        { todoList }
        </div>
    )
}

}

export default Todo;