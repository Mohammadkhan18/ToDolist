import React, { useState } from "react";
import List from "./List";

const App = () =>{

const [inputList, setInputlist] = useState("");
const [Items,setItems] = useState([]);

const itemEvent = (event) => {
  setInputlist(event.target.value);
}

const listofitem = () => {
  setItems((oldItems) => {
    return[...oldItems,inputList];
  })
  setInputlist("");
}
const deleteItems = (id) => {
  setItems((oldItems) => {
    return oldItems.filter((arrElem,index) => {
            return index !== id;
    })
  })
}

 return( 
 <>
  <div className="main_div">
<div className="center_div">
<br/>
<h1>ToDo List</h1>
<br/>
<input type="text" 
placeholder="Add a Items"
 onChange={itemEvent}
 value={inputList}
/>
<button onClick={listofitem}> + </button>
<ol>
  {/* <li>{inputList}</li> */}

 { Items.map((itemval, index) => {
  return<List key={index}
  id={index}
   text = {itemval}
    onSelect={deleteItems}
   />;
  })}
</ol>

  </div>

  </div>
  </>
  );
}

export default App;
