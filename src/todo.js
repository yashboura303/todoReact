import React from 'react';

class Todo extends React.Component{
    render(){
        const {todos} = this.props

        let todoList = []
        if (todos.length === 0){
            todoList.push(<p>no todos left</p>)
        }
        else{
            todoList = todos.map(todos =>{
                return (
                    <div className="todo" key={todos.id}>
                    <div>Name: { todos.content }</div>
                    </div>
                )
            });

        }

    return(
        <div className="todo-list">
        { todoList }
        </div>
    )
}

}

export default Todo;