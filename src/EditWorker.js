import React, { useState } from 'react'

const EditWorker = ({Worker,editWorker,onCancelEdit}) => {
    const [name,setName] = useState(Worker.name);
    const [age,setAge] = useState(Worker.age);
    const [position,setPosition] = useState(Worker.position);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedWorker = {
            id: Worker.id,
            name,
            age,
            position,
          };
          editWorker(updatedWorker);
       
    }
  

  return (
    <div  className='main'>
        <h1>Edit Worker</h1>
        <form onSubmit={handleSubmit}>
            <div className='section'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='section'>
            <label>Age</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div className='section'>
            <label>Position</label>
            <input type='text' value={position} onChange={(e)=>setPosition(e.target.value)} />
            </div>
            <button type="submit">Save</button>
            <button  onClick={onCancelEdit} >Cancel</button>
        </form>
     
       
         
    </div>
  )
}
export default EditWorker
