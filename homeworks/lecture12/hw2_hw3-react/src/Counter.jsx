import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                +1
                </button>

                <button onClick={() => this.setState({ count: this.state.count + 10 })}>
                +10
                </button>

                <button onClick={() => this.setState({ count: this.state.count + 100 })}>
                +100
                </button>

                <button onClick={() => this.setState({ count: this.state.count + 1000 })}>
                +1000
                </button>

                <button onClick={() => this.setState({ count: 0 })}>
                Reset
                </button>
            </div>
        );
    }
}

export default Counter;
// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count + 10)}>+10</button>
//       <button onClick={() => setCount(count + 100)}>+100</button>
//       <button onClick={() => setCount(count + 1000)}>+1000</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// export default Counter;