import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {setToFalse,setToTrue,reverse} from '../store/markSlice';
import {clear, setName} from '../store/todoNameSlice';
import {addTodo, checkAll, uncheckAll, toggleTodo} from '../store/todosSlice';
import TodoItem from "./TodoItem";


const Todo = () => {
  // const [todoName, setTodoName] = useState("");
  const todoName = useSelector(state=>state.todoName.name);
  // const [todos, setTodos] = useState([]);
  const todos = useSelector(state=>state.todos.todos);
  //   const [remainingCount, setRemainingCount] = useState(todos.length);
  // const [mark, setMark] = useState(false);
  const mark = useSelector(state=>state.mark.current);
  const dispatch = useDispatch();

  const remainingCount = todos.filter((todo) => todo.checked === false).length;
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && todoName != "") {
      console.log(todoName);
      // setTodos((prev) => [...prev, { name: todoName, checked: false }]);
      dispatch(addTodo({ name: todoName, checked: false }));
      // setTodoName("");
      dispatch(clear());
      //   setRemainingCount(todos.filter((todo) => todo.checked === false).length);
    }
  };
  const handleClearCompletedTodos = () => {
    // setTodos((prev) => prev.map((todo) => ({ ...todo, checked: false })));
    dispatch(uncheckAll());
    // setMark(false);
    dispatch(setToFalse());
    // setRemainingCount(todos.filter((todo) => todo.checked === false).length);
  };
  const handleClickMarkAllDone = () => {
    // setMark((prev) => !prev);
    dispatch(reverse());
    // setTodos((prev) => prev.map((todo) => ({ ...todo, checked: true })));
    dispatch(checkAll());
    // setRemainingCount(todos.filter((todo) => todo.checked === false).length);
    console.log("Click Mark All Done");
  };
  const handleClickCheck = (index) => {
    // setTodos((prev) =>
    //   prev.map((todo, i) =>
    //     i === index ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
    dispatch(toggleTodo(index));
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
        // onChange={(e) => setTodoName(e.target.value)}
        onChange={(e)=>dispatch(setName(e.target.value))}
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
  return <h1 style={{ fontSize: "30px" }}>Todos - ReactJs</h1>;
};

// const TodoItem = ({ todo, index, handleClickCheck }) => {
//   return (
//     <p
//       style={{
//         border: "1px solid black",
//         padding: "8px",
//         width: "100%",
//         textAlign: "left",
//         borderRadius: '4px'
//       }}
//       key={index}
//     >
//       <input
//         type="checkbox"
//         checked={todo.checked}
//         onChange={handleClickCheck}
//       />
//       {todo.name}
//     </p>
//   );
// };

export default Todo;
