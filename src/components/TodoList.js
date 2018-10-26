import React from "react";
import TodoItem from "./TodoItem/TodoItem";

export default class TodoList extends React.Component {

    render() {
        return (
            <div className="todo-list">
                {this.props.todoArray.map((item, index) => <TodoItem
                    key={item.id}
                    isDone={item.isDone}
                    title={item.title}
                    index={index}
                    changeTodo={this.props.changeTodo}/>)}
            </div>
        );
    }
}