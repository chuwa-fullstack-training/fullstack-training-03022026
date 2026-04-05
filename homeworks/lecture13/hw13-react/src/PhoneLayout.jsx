import React from "react";

class PhoneLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        };
    }
    handleClick = (num) => {
        this.setState({ selected: num });
    };

    render() {
        const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
        return (
            <div className="phone">
                <div className="status-bar">
                {this.state.selected ? `Selected: ${this.state.selected}` : "status bar"}
                </div>

                <div className="grid">
                {numbers.map((num) => (
                    <button key={num} onClick={() => this.handleClick(num)}>
                        {num}
                    </button>
                ))}
                </div>
            </div>
        );
    }
}

export default PhoneLayout;