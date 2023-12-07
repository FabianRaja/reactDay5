import React, { useState } from "react";
//card component imported from boostrap
export default function Card({name,description,status,index,product,setProduct,setShow,setEditID}){
   //created states according the use  
   const [statusValue,setStatusValue]=useState("");
 //delete function to delete a data from a card
   function deleteFunction(){
        const remainingData=product.filter((value,idx)=>idx!=index);
        setProduct(remainingData);
    }
//handle edit function to switch between add form and update form and passing the id
    function handleEdit(index){
        setShow(false);
        setEditID(index);
      }
      //handle status for getting the status value
      function handleStatus(index,event){
         setStatusValue(event.target.value);
         
      }
    return(
      //card component from bootstrap and necessary values added
        <div className="cardSection">
            <div className="card" >
             <div className="card-body">
             <p className="card-text">Name : {name}</p>
            <p className="card-text">Description : {description}</p>
            <span>Status  </span>
   <select onChange={(event)=>handleStatus(index,event)} defaultValue={status}  >
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
         </select><br/>
           <div className="cardButtons">
           <button  className="editButton" onClick={()=>handleEdit(index)}>Edit</button>
            <button  className="deleteButton" onClick={()=>deleteFunction()}>Delete</button>
           </div> 
         </div>
         </div>
        </div>
    )
}