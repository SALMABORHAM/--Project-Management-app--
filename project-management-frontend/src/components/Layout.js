// src/components/Layout.js
import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Layout.css'; // Create a separate CSS file for Layout if needed
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
        <header>
             <h1>Project Management</h1>
             <nav>
               <ul>
                 <li>
                   <Link to="/">Home</Link>
                </li>
            <li>
             <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link to="/create-project">Create Project</Link>
          </li>
          <li>
          <Link to="/tasks">Tasks</Link>
          </li>
          <li>
          <Link to="/create-task">Create Task</Link>
          </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
         <p>© 2024 Project Management App</p>
</footer>
    </div>
  );
};

export default Layout;

// const Layout = () => {
//   return (
//     <div>
//       <header>
//         <h1>Project Management</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//               <Link to="/create-project">Create Project</Link>
//             </li>
//             <li>
//               <Link to="/tasks">Tasks</Link>
//             </li>
//             <li>
//               <Link to="/create-task">Create Task</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         {/* Render child routes */}
//         <Outlet />
//       </main>
//       <footer>
//         <p>© 2024 Project Management App</p>
//       </footer>
//     </div>
//   );
// };

// export default Layout;