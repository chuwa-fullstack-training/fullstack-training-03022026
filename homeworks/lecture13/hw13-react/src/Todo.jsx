import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        // Only include keys that exist initially in state.
        // The id is generated when adding a new todo, so it should not be in state.
        this.state = {
            input: "",
            todos: []
        }
    }
    // features
    addTodo = (e) => {
        if (e.key === "Enter" && this.state.input.trim() !== "") {
            const newTodo = {
                id: Date.now(), // Date.now() good for unique id
                text: this.state.input,
                completed: false
            };

            this.setState({
                todos: [...this.state.todos, newTodo],
                input: ""
            });
        }
    };

    toggleTodo = (id) => {
        const updatedTodos = this.state.todos.map((todo) =>
            todo.id === id
            // build a new todo ojbect and change the completed to !completed
            ? { ...todo, completed: !todo.completed }
            : todo
        );

        this.setState({ todos: updatedTodos });
    };
    // markAllDone = () => {
    //     const updatedTodos = this.state.todos.map((todo) => ({
    //     ...todo,
    //     completed: true
    //     }));

    //     this.setState({ todos: updatedTodos });
    // };
    markAllDone = (e) => {
        const checked = e.target.checked;

        const updatedTodos = this.state.todos.map((todo) => ({
            ...todo,
            completed: checked
        }));

        this.setState({ todos: updatedTodos });
    };

    clearCompleted = () => {
        const activeTodos = this.state.todos.filter((todo) => !todo.completed);
        this.setState({ todos: activeTodos });
    };




    render() {

        const activeCount = this.state.todos.filter((todo) => !todo.completed).length;
        return (
            <div>
                <h1>Todos - ReactJs</h1>

                <input
                type="text"
                placeholder="Type a todo and hit Enter"
                value={this.state.input}
                onChange={(e) => this.setState({ input: e.target.value })}
                onKeyDown={this.addTodo}
                style={{ width: "300px", height: "20px", fontSize: "16px", padding: "5px", marginBottom: "12px"}}
                />
                <div>
                <span>{activeCount} remaining</span>
                <button className='clear-btn' onClick={this.clearCompleted}>
                    Clear Completed Todos
                </button>
                </div>

                {/* <br /> */}
                <div style={{ marginTop: "10px" }}>
                    <label>
                        <input type="checkbox" onChange={this.markAllDone} />
                        Mark All Done
                    </label>
                </div>


                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    {this.state.todos.map((todo) => (
                        <li key={todo.id}
                            style={{
                                border: "1px solid #ddd",
                                padding: "10px",
                                marginBottom: "8px",
                                borderRadius: "6px",
                                marginRight:"300px"
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.toggleTodo(todo.id)}
                                style={{ marginRight: "10px" }}
                            />
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }

}

export default Todo;