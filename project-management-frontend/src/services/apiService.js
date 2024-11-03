import axios from 'axios';

const API_URL = 'https://localhost:44363/api/Projects'; // Your API base URL

// Projects API
export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the project data
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Rethrow error for handling in the component
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Return the specific project data
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(API_URL, projectData);
    return response.data; // Return the created project data
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    await axios.put(`${API_URL}/${id}`, projectData);
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

// Tasks API
export const fetchTasksForProject = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/${projectId}/tasks`);
    return response.data; // Return the tasks for the specified project
  } catch (error) {
    console.error('Error fetching tasks for project:', error);
    throw error;
  }
};

export const createTask = async (projectId, taskData) => {
  try {
    const response = await axios.post(`${API_URL}/${projectId}/tasks`, taskData);
    return response.data; // Return the created task data
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    await axios.put(`${API_URL}/tasks/${taskId}`, taskData);
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
