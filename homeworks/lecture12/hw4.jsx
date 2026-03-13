import { useState } from "react";

const App = () => {
  const [num, setNum] = useState("");
  let display = "";
  if (num === "" || isNaN(Number(num))) {
    display = "";
  } else {
    if (String(num).at(-1) === "1") {
      display = String(num) + "st";
    } else if (String(num).at(-1) === "2") {
      display = String(num) + "nd";
    } else if (String(num).at(-1) === "3") {
      display = String(num) + "rd";
    } else {
      display = String(num) + "th";
    }
  }

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ flex: 1 }}
      />
      <p
        style={{
          flex: 1,
          border: "1px solid black",
          padding: "10px",
          margin: 0,
        }}
      >
        {display}
      </p>
    </div>
  );
};

export default App;
