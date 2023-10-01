import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchIndividualTask } from '../services/Tasks';

function Task() {
  const {id} = useParams();
  const navigate = useNavigate();
  
  const {isLoading, error,isError, data} = useQuery({
    queryKey: ["individual Task",id],
    queryFn: () => fetchIndividualTask(id),
  })
  
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  
  return (
    <div>
      <h2  className="text-2xl font-bold">Task No - {id}</h2>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => navigate("/")}>Go Back</button>
      <h4 className="text-xl font-semibold my-2">{data.taskname}</h4>
      <h4 className="text-gray-600">{data.description}</h4>
    </div>
  )
}

export default Task
