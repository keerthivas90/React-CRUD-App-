import React from 'react'

const DeleteWorker = ({Worker,deleteWorker,onCancelDelete}) => {

    const handleDelete = () => {
        deleteWorker(Worker.id)
    }
  return (
    <div>
       <h1>DeleteWorker</h1>
       <p>Are you sure you want to delete {Worker.name}?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onCancelDelete}>Cancel</button>
    </div>
  )
}

export default DeleteWorker