import { useLocation, useNavigate } from "react-router-dom";

// const Component = ({ id, name, handleNameChange, color,onClick }) => {
const Component = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: state?.color || "white",
        border: "1px solid black",
        height: "100px",
        margin: "20px",
        padding: "10px",
      }}
    //   key={id}
    //   onClick={onClick}
    >
      <p>Component name: {state?.name}</p>
      {/* <input type="text" value={name} onChange={handleNameChange} /> */}
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
};

export default Component;
