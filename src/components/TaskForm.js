import React, { useState } from "react";

function TaskForm({onTaskSubmit, editableValue}) {
  
const initialValue = {
  taskname: editableValue?.taskname || "",
  description: editableValue?.description || "",
};

  const [task, setTask] = useState(initialValue);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value }); // to preserve the previous value we used spreed operator.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(task);
    setTask({
      taskname: "",
      description: "",
    });
  };

  const inputFields = (label) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text" name={label.toLowerCase()} value={task[label.toLowerCase()]} onChange={handleChange} required/>
    </div>
  );
  

  return (
    <div className="max-w-xs mx-auto">
      <form onSubmit={handleSubmit}>
        {inputFields("TaskName")}
        {inputFields("Description")}
        <button 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TaskForm;
