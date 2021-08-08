import React, { useState } from 'react';

function Todos2() {
    const [task,setTask]=useState("");
    const [tasklist,setTaskList]=useState([]);

    const nameHandler=(e)=>{
      setTask(e.target.value);
    }

    const addItems=()=>{
        if(task!==""){
        const items={
           id:Math.floor(Math.random()*1000),
           isCompleted:false,
           value:task
        }
        setTaskList([...tasklist,items]);
    }

    };
    const deleteItems=(e,id)=>{
        e.preventDefault();
        setTaskList(tasklist.filter((e)=>e.id!=id));
    }
    
  

    

    const completeItems=(e,id)=>{
        e.preventDefault();

        const element=tasklist.findIndex(e=>e.id== id);

        const newTaskList=[...tasklist];

        newTaskList[element]={...newTaskList[element],isCompleted:true}
        setTaskList(newTaskList);
    }



    return (
        <div>
            <input type="text" onChange={nameHandler}></input>
        
                <button onClick={addItems}>add</button>
        
        
            <br/>
            {tasklist!==[]?
            <ul>
           {tasklist.map(t=>
                <li>{t.value}
                <button onClick={(e)=>completeItems(e,t.id)}>completed</button>
                <button onClick={(e)=>deleteItems(e,t.id)}>delete</button> 
                
                </li>
                )}
            </ul>:null}

           

        </div>
    );
}

export default Todos2;