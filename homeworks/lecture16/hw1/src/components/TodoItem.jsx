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
  
  export default TodoItem;