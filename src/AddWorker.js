import React, { useState } from 'react'

const AddWorker = ({addWorker ,onCancel }) => {
   const [name,setName] =useState('');
   const [age,setAge] = useState('');
   const [position,setPosition] = useState(''); 

   const handleSubmit = (e) => {
    e.preventDefault();
  
   addWorker({   
    name ,
    age: Number(age),
    position 
  });

    setName('');
    setAge('');
    setPosition('');
   }
  return ( 
    <div className='main'>
        <h1>Add Worker </h1>
        <form onSubmit={handleSubmit}>
            <div className='section'>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required autoFocus />
            </div>


            <div className='section'>
            <label>Age</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} required />
           </div>
            <div className='section'>
            <label>Position</label>
            <input type='text' value={position} onChange={(e)=>setPosition(e.target.value)} required />
            </div>
            <button type="submit">Save</button>
            <button  onClick={onCancel}  >Cancel</button>
        </form>
        
    </div>
  )
}
export default AddWorker