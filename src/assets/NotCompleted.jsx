import React, { useState } from "react";
//used seperate component for notcompleted (for filtering)
export default function NotCompleted({name,description,index,product,setProduct,setShow,setEditID}){
   //created states according the use
   const [statusValue,setStatusValue]=useState("");
   //setting status value as NotCompleted
   const status="Not Completed"
   //delete function to delete the data
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
        //same card used in card.jsx
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