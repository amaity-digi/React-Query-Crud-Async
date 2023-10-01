import React from 'react'
import TaskForm from '../components/TaskForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchIndividualTask, updateTask } from '../services/Tasks';

function EditTask() {
  const {id} = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {isLoading, error, isError, data} = useQuery({
    queryKey: ["tasks", id],
    queryFn: () => fetchIndividualTask(id)
  })

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["tasks"]})
    }
  })

  const handleUpdate = (updatedValue) => {
    console.log("first", updatedValue);
    updateMutation.mutate({
      id,
      ...updatedValue
    });
    navigate("/")
  }

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
         <TaskForm onTaskSubmit={handleUpdate} editableValue={data} />
    </div>
  )
}

export default EditTask
