// import React, { useState, useEffect } from 'react';
// import api from '../api/axios';

// const ProjectList = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await api.get('/projects');
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error("Failed to fetch projects. Loading test data.", error);
//                 // Sample test data with additional fields
//                 setProjects([
//                     {
//                         id: 1,
//                         name: "Project Alpha",
//                         description: "Description for Project Alpha",
//                         start_date: "2024-01-01",
//                         end_date: "2024-06-30",
//                         budget: 10000,
//                         owner: "1",
//                         status: "Active"
//                     },
//                     {
//                         id: 2,
//                         name: "Project Beta",
//                         description: "Description for Project Beta",
//                         start_date: "2024-02-01",
//                         end_date: "2024-07-31",
//                         budget: 20000,
//                         owner: "2",
//                         status: "Active"
//                     },
//                     {
//                         id: 3,
//                         name: "Project Gamma",
//                         description: "Description for Project Gamma",
//                         start_date: "2024-03-01",
//                         end_date: "2024-08-31",
//                         budget: 15000,
//                         owner: "3",
//                         status: "Inactive"
//                     },
//                     {
//                         id: 4,
//                         name: "Project Delta",
//                         description: "Description for Project Delta",
//                         start_date: "2024-04-01",
//                         end_date: "2024-09-30",
//                         budget: 25000,
//                         owner: "4",
//                         status: "Active"
//                     },
//                     {
//                         id: 5,
//                         name: "Project Epsilon",
//                         description: "Description for Project Epsilon",
//                         start_date: "2024-05-01",
//                         end_date: "2024-10-31",
//                         budget: 30000,
//                         owner: "5",
//                         status: "Active"
//                     }
//                 ]);
//             }
//         };
//         fetchProjects();
//     }, []);

//     return (
//         <div>
//             <h1>Project List</h1>
//             {projects.length > 0 ? (
//                 projects.map(project => (
//                     <div key={project.id} className="project-card">
//                         <h2>{project.name}</h2>
//                         <p>Description: {project.description}</p>
//                         <p>Start Date: {project.start_date}</p>
//                         <p>End Date: {project.end_date}</p>
//                         <p>Budget: ${project.budget}</p>
//                         <p>Owner: {project.owner}</p>
//                         <p>Status: {project.status}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading projects...</p>
//             )}
//         </div>
//     );
// };

// export default ProjectList;


// components/ProjectList.js
// import React, { useEffect, useState } from 'react';
// import { fetchProjects } from '../services/apiService';

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const getProjects = async () => {
//       const data = await fetchProjects();
//       setProjects(data);
//     };
//     getProjects();
//   }, []);

//   return (
//     <div>
//       <h1>Projects</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.projectId}>{project.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProjectList;
import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject } from '../services/apiService'; // Adjust the path as necessary

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data); // Set the retrieved projects in state
      } catch (error) {
        setError('Error fetching projects');
      }
    };

    loadProjects();
  }, []);

  // Example of how to handle creating a project
  const handleCreateProject = async () => {
    const newProject = { projectName: 'New Project', description: 'Project Description' }; // Adjust data as necessary
    try {
      const createdProject = await createProject(newProject);
      setProjects([...projects, createdProject]); // Add the new project to the list
    } catch (error) {
      setError('Error creating project');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Project List</h1>
      <button onClick={handleCreateProject}>Create Project</button>
      <ul>
        {projects.map(project => (
          <li key={project.projectId}>{project.projectName}</li> // Adjust to your project properties
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
