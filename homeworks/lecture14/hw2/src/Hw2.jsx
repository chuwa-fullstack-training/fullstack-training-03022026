import { useState, useEffect } from "react";

const Hw2 = () => {
  const [components, setComponents] = useState([
    { id: 1, name: "first", color: "white" },
    { id: 2, name: "second", color: "white" },
    { id: 3, name: "third", color: "white" },
    { id: 4, name: "fourth", color: "white" },
    { id: 5, name: "fifth", color: "white" },
    { id: 6, name: "sixth", color: "white" },
  ]);

  const colors = ["red", "blue", "green", "orange", "purple", "pink"];
  const [color, setColor] = useState("");
  const [componentSelector, setComponentSelector] = useState();

  const handleNameChange = (id, value) => {
    setComponents((prev) =>
      prev.map((component) =>
        component.id === id ? { ...component, name: value } : component,
      ),
    );
  };
  const handleColorChange = (name, color) => {
    setComponents((prev) =>
      prev.map((component) =>
        component.name === name ? { ...component, color } : component,
      ),
    );
  };
  useEffect(() => {
    if (!componentSelector || !color) return;
    const handle = () => {
      handleColorChange(componentSelector, color);
    };
    handle();
  }, [color]);
  useEffect(() => {
    const handle = () => {
      setColor("");
    };
    handle();
  }, [componentSelector]);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <select
          value={componentSelector}
          onChange={(e) => setComponentSelector(e.target.value)}
        >
          {components.map((component) => (
            <option key={component.name} value={component.name}>
              {component.name}
            </option>
          ))}
        </select>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="" disabled>
            Choose a color
          </option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {components.map((component) => {
          return (
            <Component
              id={component.id}
              name={component.name}
              color={component.color}
              handleNameChange={(e) => {
                handleNameChange(component.id, e.target.value);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Component = ({ id, name, handleNameChange, color }) => {
  return (
    <div
      style={{
        textAlign: "left",
        backgroundColor: color,
        border: "1px solid black",
        height: "100px",
        margin: "20px",
        padding: "10px",
      }}
      key={id}
    >
      <p>Component name:</p>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
  );
};

export default Hw2;
