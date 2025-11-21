import './todo.css'
import { useState } from 'react'
function Todo(){

     const [inputtext, setinputtext]= useState("");
     const [items, setitems]= useState([]);

     function handlechange(event){
        const newvalue=event.target.value;
        setinputtext(newvalue);
        console.log(newvalue);
        
     }
        function additem(){
            setitems(previtems=>{
                return [...previtems, inputtext];
                
            });
            setinputtext("");
        }

    return <>

      <div className='main_div'>
        <div className="todo-app">
           <div className="name">
            <h1>To-Do-List </h1>
            <hr />
            </div>
           <div className="enter-task">
            <input onChange={handlechange} value={inputtext}
            className="input-section" type="text" placeholder="Add a new task..."  /> 
            <button className= "button-section" onClick={additem}><span>Add</span></button>
            </div>
            <ul>
             { items.map(todoitem=><li>{todoitem}</li>)}
        </ul>
        </div>
      </div>
    </>

}
export default Todo;
