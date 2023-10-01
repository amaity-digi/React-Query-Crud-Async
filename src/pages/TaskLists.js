import React from 'react'
import AddTask from '../components/AddTask'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deletetask, fetchTasks } from '../services/Tasks';
import { useNavigate } from 'react-router-dom';

function TaskLists() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {isLoading, isError, error, data} =useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks, 
  });

  const deleteMutation = useMutation({
    mutationFn: deletetask,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']})
    }
  })

  const handleDeleteTask = (id) => {
    deleteMutation.mutate(id);
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <AddTask />
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Task Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data?.map(({ id, taskname, description }) => (
            <tr key={id}>
              <td className="border px-4 py-2 cursor-pointer" onClick={() => navigate(`/task/${id}`)}>
                {taskname}
              </td>
              <td className="border px-4 py-2">{description}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => navigate(`task/${id}/edit`)}>
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2" onClick={() => handleDeleteTask(id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default TaskLists
