import { useState } from "react";

const Phone = () => {
  //   const [buttons, setButtons] = useState(Array.from({length: 20}, (_, i) => {return {number:i+1,flag:false}}));
  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    // outer
    <div
      style={{
        width: "280px",
        backgroundColor: "white",
        borderRadius: "40px",
        border: "2px solid black",
        padding: "90px 15px",
      }}
    >
      {/* // inner */}
      <div
        style={{
          border: "2px solid black"
        }}
      >
        <div
          style={{
            border: "1px dashed pink",
            textAlign: "center",
            padding: "8px",
            backgroundColor: "blue",
            color: "black",
          }}
        >
          Status Bar
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            padding: "10px",
            backgroundColor: "blue",
          }}
        >
          {buttons.slice(0, 16).map((number, index) => {
            return <Button key={index} number={number} />;
          })}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            padding: "10px",
            backgroundColor: "#6b8cce",
          }}
        >
          {buttons.slice(16).map((number, index) => {
            return <Button key={index} number={number} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Button = ({ number }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      style={{
        backgroundColor: pressed ? "gray" : "white",
        borderRadius: "10px",
        width: "100%",
        aspectRatio: "1", 
        fontSize: "20px",
        fontWeight: "bold",
        border: "none", 
        cursor: "pointer",
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => {
        setPressed(false);
      }}
    >
      {number}
    </button>
  );
};

export default Phone;
