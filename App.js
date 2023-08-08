const heading = [React.createElement(
    "div",
     {id: "parent-header"} , 
     [React.createElement(
        "h1",
         {id: "heading"} , 
         "hello siddharth"),
         React.createElement(
            "h1",
             {id: "heading"} ,  
             "hello heading2"),
        ]),
        React.createElement(
            "div",
             {id: "child-header"} , 
             [React.createElement(
                "h1",
                 {id: "heading"} , 
                 "hello siddharth"),
                 React.createElement(
                    "h1",
                     {id: "heading"} , 
                     "hello heading2"),
                ]),
    ];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);