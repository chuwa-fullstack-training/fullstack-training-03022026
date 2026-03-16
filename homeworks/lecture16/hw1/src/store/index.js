import { configureStore } from '@reduxjs/toolkit';
import markReducer from './markSlice';
import todoNameReducer from './todoNameSlice';
import todosReducer from './todosSlice';

// const [todoName, setTodoName] = useState("");
//   const [todos, setTodos] = useState([]);

export const store = configureStore({
    reducer:{
        mark:markReducer,
        todoName:todoNameReducer,
        todos:todosReducer
    }
})
