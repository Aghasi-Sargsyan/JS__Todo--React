import React, {Component} from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from "./components/TodoList"
import TodoItemObj from "./classes/TodoItemObj";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoArray: [],
        };

        this.addTodo = this.addTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
    }

    addTodo(todoTitle) {
        todoTitle && this.setState({
            todoArray: this.state.todoArray.concat(new TodoItemObj(todoTitle))
        });
    }

    changeTodo(index, value) {
        const newArray = this.state.todoArray.concat();
        if (typeof value === "boolean") {
            newArray[index].isDone = value;
        } else {
            newArray[index].title = value;
        }
        this.setState({
            todoArray: newArray
        })
    }


    render() {
        return (
            <div className={"app"}>
                <header>
                    <h1>To Do List</h1>
                    <span className="header__count-txt">
                        Total
                        <span className="header__counter">
                            {` ${this.state.todoArray.length} `}
                        </span>
                        todo
                    </span>
                </header>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList todoArray={this.state.todoArray} changeTodo={this.changeTodo}/>
            </div>
        );
    }
}

export default App;
