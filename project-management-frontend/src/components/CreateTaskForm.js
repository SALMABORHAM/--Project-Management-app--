import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createTask } from '../services/apiService';




const CreateTaskForm = () => {
  const { projectId } = useParams();
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: dueDate,
      projectId: projectId,
    };
    await createTask(projectId, newTask);
    alert('Task created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTaskForm;
