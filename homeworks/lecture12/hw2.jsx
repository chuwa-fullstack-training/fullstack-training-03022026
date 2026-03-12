import React from "react";
import ReactDOM from 'react-dom/client';

import './hw2.css';

const App = () => {
    return (
        <div className="container">
            <header>Header</header>
            <nav>Nav</nav>
            <div className="content">
                <aside>Aside</aside>
                <section>Section</section>
            </div>
            <footer>Footer</footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);