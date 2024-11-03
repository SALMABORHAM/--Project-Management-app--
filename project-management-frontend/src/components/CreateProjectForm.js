import React, { useState } from 'react';
import { createProject } from '../services/apiService';

const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = {
      name: projectName,
      description: description,
    };
    
    try {
      await createProject(newProject);
      alert('Project created successfully!');
      setProjectName(''); // Reset the form after submission
      setDescription('');  // Reset the form after submission
    } catch (error) {
      alert('Failed to create project. Please try again.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProjectForm;
