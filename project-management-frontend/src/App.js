import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Your layout component
import Dashboard from './components/Dashboard'; // Your dashboard component
import ProjectList from './components/ProjectList'; // Your project list component
import TaskList from './components/TaskList'; // Your task list component
import CreateProject from './components/CreateProjectForm'; // Component for creating a project
import UpdateProject from './components/UpdateTask'; // Component for updating a project
import CreateTask from './components/CreateTask'; // Component for creating a task
import UpdateTask from './components/UpdateTask'; // Component for updating a task
import NotFound from './components/NotFound'; // Component for 404 Not Found


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Project Management Application</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/tasks">Tasks</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
        <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/create" element={<CreateProject />} />
          <Route path="/projects/:id" element={<UpdateProject />} />
          <Route path="/projects/:projectId/tasks" element={<TaskList />} />
          <Route path="/projects/:projectId/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/:taskId/edit" element={<UpdateTask />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
      </Layout>
    </Router>
        </main>
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Link for client-side routing
// import Dashboard from './components/Dashboard';
// import ProjectList from './components/ProjectList';
// import TaskList from './components/TaskList';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>Project Management Application</h1>
//           <nav>
//             <ul className="nav-list">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/projects" className="nav-link">Projects</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/tasks" className="nav-link">Tasks</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main className="App-main">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/projects" element={<ProjectList />} />
//             <Route path="/tasks" element={<TaskList />} />
//           </Routes>
//         </main>
//         <footer className="App-footer">
//           <p>&copy; 2024 Project Management System</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProjectList from './components/ProjectList';
// import CreateProjectForm from './components/CreateProjectForm';
// import TaskList from './components/TaskList';
// import Layout from './components/Layout';

// import CreateTaskForm from './components/CreateTaskForm';
// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Layout />} />
//       <Route path="/" element={<ProjectList />} />
//         <Route path="/create-project" element={<CreateProjectForm />} />
//         <Route path="/tasks/:projectId" element={<TaskList />} />
//         <Route path="/create-task/:projectId" element={<CreateTaskForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

