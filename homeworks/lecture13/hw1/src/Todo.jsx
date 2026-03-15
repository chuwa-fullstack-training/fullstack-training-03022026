import { useState } from "react";

const Todo = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);
  //   const [remainingCount, setRemainingCount] = useState(todos.length);
  const [mark, setMark] = useState(false);
  const remainingCount = todos.filter((todo) => todo.checked === false).length;
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && todoName != "") {
      console.log(todoName);
      setTodos((prev) => [...prev, { name: todoName, checked: false }]);
      setTodoName("");
      //   setRemainingCount(todos.filter((todo) => todo.checked === false).length);
    }
  };
  const handleClearCompletedTodos = () => {
    setTodos((prev) => prev.map((todo) => ({ ...todo, checked: false })));
    setMark(false);
    // setRemainingCount(todos.filter((todo) => todo.checked === false).length);
  };
  const handleClickMarkAllDone = () => {
    setMark((prev) => !prev);
    setTodos((prev) => prev.map((todo) => ({ ...todo, checked: true })));
    // setRemainingCount(todos.filter((todo) => todo.checked === false).length);
    console.log("Click Mark All Done");
  };
  const handleClickCheck = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };
  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto",
      }}
    >
      <Title />
      <input
        style={{ width: "100%",padding: "7px",border: '3px solid blue', borderRadius: '4px'}}
        type="text"
        placeholder="Type a todo and hit Enter"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{remainingCount} remaining</span>
        <button onClick={handleClearCompletedTodos}>
          Clear Completed Todos
        </button>
      </div>
      <div style={{display: 'flex'}}>
        <input
          type="checkbox"
          checked={mark}
          onChange={handleClickMarkAllDone}
        />
        <span>Mark All Done</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              index={index}
              handleClickCheck={() => {
                handleClickCheck(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Title = () => {
  return <h1>Todos - ReactJs</h1>;
};

const TodoItem = ({ todo, index, handleClickCheck }) => {
  return (
    <p
      style={{
        border: "1px solid black",
        padding: "8px",
        width: "100%",
        textAlign: "left",
        borderRadius: '4px'
      }}
      key={index}
    >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={handleClickCheck}
      />
      {todo.name}
    </p>
  );
};

export default Todo;
