import React, { useState } from "react";

export default function Add({product,setProduct}){

    //created states according to the use
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    //add function for adding name and description to the card
    function addFunction(){
         //default status will be not completed as it is adding newly
        const status="Not Completed"; 
        const newTodo={
            name,
            description,
            status,
        }
        setProduct(product.concat(newTodo));
        //clearing the input fields after the use
        setName("");
        setDescription("");
    }
    return(
        <div className="add">
            {/* using preventDefault for prevent the page from loading when the button is clicked */}
            <form onSubmit={(event)=>event.preventDefault} className="addForm">
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Todo Name"/>
            <input type="text" value={description} onChange={(event)=>setDescription(event.target.value)}placeholder="Todo Description"/>
            <button className="addFormButton" type="button" onClick={addFunction}>Add Todo</button>
            </form>  
        </div>
    )
}