import React ,{useRef} from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import './table.css';
const WorkerList = ({ Workers, handleDelete, handleEdit ,handleAddWorker }) => {
  const InputRef = useRef();
  
  return (
    <div>
      <h2>Workers List</h2>
      <div className="section">
      <DownloadTableExcel filename="record"  currentTableRef={InputRef.current}>
        <button> Export</button>
      </DownloadTableExcel>
      </div>
      
      <table ref={InputRef} >
        <thead>
          <tr>
       
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { Workers && Workers.map((Worker) => (
            <tr key={Worker.id}>
             
              <td data-label="Name">{Worker.name}</td>
              <td data-label="Age">{Worker.age}</td>
              <td data-label="Position">{Worker.position}</td>
              <td data-label="Actions">
                <button onClick={() => handleEdit(Worker.id)}>Edit</button>
                <button onClick={() => handleDelete(Worker.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div  className="section">
      <button onClick={handleAddWorker}>Add</button>        
      </div>
     
    </div>
  );
};

export default WorkerList;