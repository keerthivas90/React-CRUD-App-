import React, { useState } from 'react'
import AddWorker from './AddWorker';
import WorkerList from './WorkerList';
import EditWorker from './EditWorker';
import DeleteWorker from './DeleteWorker';
import data from "./data/Workers.json";
import apiRequest from './apiRequest';
const WorkerApp = () => {
    const[Workers,setWorkers] = useState(data.Workers);
    const [currentWorker, setCurrentWorker] = useState(null);
    const [showEditWorker, setShowEditWorker] = useState(false);
    const [showAddWorker, setShowAddWorker] = useState(false);
    const [showDeleteWorker, setShowDeleteWorker] = useState(false);
    const [WorkerToDelete, setWorkerToDelete] = useState(null);


    const APIWorkerS_URL = `https://360degreesolar.in/workers/json/Workers.json/`
    const handleDelete = (id) => {
        setWorkerToDelete(id);
        setShowDeleteWorker(true);
        
      };
      const deleteWorker = async (id) => {
      const updatedWorkers = Workers.filter((Worker) => Worker.id !== id);
      setWorkers(updatedWorkers);
      alert( 'worker details Deleted')
        setShowDeleteWorker(false);
        const deleteWorkersdb = {
          method: "DELETE"
        
        }
        const deleteUrl = `${APIWorkerS_URL}${id}` ;       
        const deleteResult = await apiRequest(deleteUrl,deleteWorkersdb)
        console.log(deleteResult + 'Worker deleted')
       
  
      };
      const handleEdit = (id) => {
        const Worker = Workers.find((Worker) => Worker.id === id);    
        setCurrentWorker(Worker);
        setShowEditWorker(true);
      };
      const editWorker = async (updatedWorker,id) => {
      
        const updatedWorkers = Workers.map((Worker) =>
          Worker.id === updatedWorker.id ? updatedWorker : Worker
        );
        const editWorkersdb = {
          method: "PATCH",
          headers: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(updatedWorker) 
        }
        
        const editUrl = `${APIWorkerS_URL}${updatedWorker.id}` ;  
      
        const WorkersResult = await apiRequest(editUrl,editWorkersdb)
        console.log(WorkersResult + 'edit result issss')

        setWorkers(updatedWorkers);
        alert(`${updatedWorker.name}\xa0 details modified succesfully`)
        setCurrentWorker(null);
        setShowEditWorker(false);
      };
      const handleAddWorker = () => {
        setShowAddWorker(true);
      };
      const addWorker = (Worker) => {
        const id =  Workers.length >= 1 ? Workers.length + 1: 1 ;
        
        const newWorker = { id:String(id)    ,...Worker  };
        const updatedWorkers = [...Workers, newWorker];
        setWorkers(updatedWorkers);
        const postWorkers = {
          method: "POST",
          headers: {
            'Content-type':'application/json'
          },
          body: JSON.stringify(newWorker) 
        }
        const WorkersResult = apiRequest(APIWorkerS_URL,postWorkers)
        console.log(WorkersResult + 'add result issss')
        alert(`${Worker.name}\xa0  details added succesfully`)
        setShowAddWorker(false);
      };
 const onCancel = () => {
  setShowAddWorker(false)
 }
 const onCancelEdit =() =>{
  setShowEditWorker(false)
 }
 const onCancelDelete =() =>{
  setShowDeleteWorker(false)
 }
  return (
    <div>
       <h1> Worker Admin Portal </h1> 
       { showDeleteWorker ? (
             <DeleteWorker deleteWorker={deleteWorker} onCancelDelete={onCancelDelete}
              Worker={Workers.find((Worker) => Worker.id === WorkerToDelete)} />
        ) : showEditWorker ? (
            <EditWorker editWorker={editWorker} Worker={currentWorker} onCancelEdit={onCancelEdit} />
        ) : showAddWorker ? (
            <AddWorker addWorker={addWorker}  onCancel={onCancel}  />

        ) : (
            <WorkerList Workers={Workers} handleAddWorker={handleAddWorker} handleDelete={handleDelete} handleEdit={handleEdit} />
        )}
    </div>
  )
}
export default WorkerApp
