import React from "react";
import ReactDOM from "react-dom/client";
// const heading = [React.createElement(
//    "div",
//    { id: "parent-header" },
//    [React.createElement(
//       "h1",
//       { id: "heading" },
//       "hello siddharth"),
//    React.createElement(
//       "h1",
//       { id: "heading" },
//       "hello heading2"),
//    ]),
// React.createElement(
//    "div",
//    { id: "child-header" },
//    [React.createElement(
//       "h1",
//       { id: "heading" },
//       "hello siddharth"),
//    React.createElement(
//       "h1",
//       { id: "heading" },
//       "hello heading2"),
//    ]),
// ];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const Header = () =>  <h1 className="header">hello world</h1>

const number = [1000,100,200,300]

const Heading2 = () => (
   <div>
      <Header />
      {(number).map(n=> (n / 100)).join(',')}
      <h2 style={{color: "red"}}>hello see up</h2>
   </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2 />);