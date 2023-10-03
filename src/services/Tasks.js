import axios from "axios";

export const fetchTasks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/tasks");
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};

export const fetchIndividualTask = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};

export const createTask = async (newTask) => {
  try {
    const response = axios.post("http://localhost:3000/tasks", newTask, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};

export const deletetask = async (id) => {
  try {
    const response = axios.delete(`http://localhost:3000/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export const updateTask = async (updatedTask) => {
  try {
    const response = axios.put(
      `http://localhost:3000/tasks/${updatedTask.id}`,
      updatedTask,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
};
