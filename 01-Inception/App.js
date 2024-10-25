// const heading = document.createElement("h1");
//       heading.innerHTML = "Hello world from JS!";
//       const root = document.getElementsById("root");
//       root.appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from react!"
// );
// console.log(heading); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* <div id="parent">
  <div id="child"> 
    <h1>I'm an h1 tag</h1> //create array to add siblings
    <h2>I'm an h2 tag</h2>
  </div>
  <div id="child2"> 
    <h1>I'm an h1 tag</h1> //create array to add siblings
    <h2>I'm an h2 tag</h2>
  </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

//JSX

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
