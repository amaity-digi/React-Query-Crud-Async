export const fetchTasks = async () => {
  const response = await fetch("http://localhost:3000/tasks");
  const result = await response.json();
  return result;
};

export const fetchIndividualTask = async (id) => {
  const response = await fetch(`http://localhost:3000/tasks/${id}`);
  const result = await response.json();
  return result;
};

export const createTask = async (newTask) => {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return response.json();
};

export const deletetask = async (id) => {
  const response = await fetch(`http://localhost:3000/tasks/${id}`,{
    method: "DELETE",
  });
  return response.json();
};

export const updateTask = async (updatedTask) => {
  const response = await fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  return response.json();
};
