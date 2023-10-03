import React from 'react'
import TaskForm from './TaskForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from '../services/Tasks';
import toast from 'react-hot-toast';

function AddTask() {
  const queryClient = useQueryClient();

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("Task added succesfully!");
      queryClient.invalidateQueries({})}, //Basic meaning: clear the cache data and fetch it again, otherwise it will take time to fetch the new data.
    onError: (err) => {toast.error(err.message) }
  });

  const handleTaskSubmit = (task) => {
    createTaskMutation.mutate({
      id: new Date().toISOString(),
      ...task,
    })
  }

  return (
    <div>
        <h3 className='text-3xl text-center'>Add New Task</h3>
        <TaskForm onTaskSubmit={handleTaskSubmit} editableValue={{}}/>
    </div>
  )
}

export default AddTask
