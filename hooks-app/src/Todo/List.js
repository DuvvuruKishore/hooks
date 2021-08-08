import React from 'react';

function List(props) {
    const items=props.items;
    const listItems=items.map(item=>{
        return <div className="list" key={item.key}>
                <p>{item.text}</p> 
      {  /*
        <input type="text" id={item.key} value={item.text} onChange={(e)=>{
        props.setUpdate(e.target.value,item.key)}}/>*/}
       

             <button onClick={() => {
                props.deleteItem(item.key)
            }}>delete</button>
                 
            </div>
        
    })
    
    return (
        <div>
            {listItems}
             </div>
    );
}

export default List;