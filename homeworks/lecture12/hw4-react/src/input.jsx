import React from "react";

class Ordinal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        };

    }

    getSuffix(n) {
        if (n % 100 >= 11 && n % 100 <= 13) {
            return "th";
        }
        if (n % 100 === 1) {
            return "st"
        }
        if (n % 100 === 2) {
            return "nd"
        }
        if (n % 100 === 3) {
            return "rd"
        }

        return "th"

    }
    renderResult() {
        const { num } = this.state;

        if (num === "") {
        return "";
        }
        if (/^\d+$/.test(num)) {
        return `${num}${this.getSuffix(Number(num))}`;
        }

        return num;
    }
    render() {
        return (
            <div>
                <input
                type="text"
                value={this.state.num}
                onChange={(e) => this.setState({ num: e.target.value })}
                />

                <span>{this.renderResult()}</span>
            </div>
        )
    }
}

export default Ordinal;