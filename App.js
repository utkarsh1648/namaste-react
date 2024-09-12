/* 
*
*<div id="parent">
*    <div id="child">
*        <h1>I'm h1 tag</h1>
*        <h2>I'm h2 tag</h2>
*    <div>
*   <div id="child2">
*       <h1>I'm h1 tag of child2</h1>
*       <h2>I'm h2 tag of child2</h2>
*   <div>
*</div>
*
*ReactElement(Object) => HTML(Browser Understands)
*/


const parent  = React.createElement("div", {id: "parent"}, [
    React.createElement("child", {id: "child"}, [
        React.createElement("h1", null, "I'm h1 tag"),
        React.createElement("h2", null, "I'm h2 tag")
    ]),
    React.createElement("child", {id: "child"}, [
        React.createElement("h1", null, "I'm h1 tag of child2"),
        React.createElement("h2", null, "I'm h2 tag of child2")
    ])
]);
console.log(parent);  //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);