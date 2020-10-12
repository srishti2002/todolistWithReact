import React, { useState } from "react";

function App() {

const [inputText, setInputText]=useState("");
const[items,setItem]=useState([]);
function handleChange(event){
  const newValue=event.target.value;
  setInputText(newValue);

};

function addItem(){
  setItem(prevItem=>{
  return [...prevItem, inputText];
})
setInputText("");
}  
 return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item=>{
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
