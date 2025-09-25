import React, { useState } from 'react';
import RoleSelection from './components/Auth/RoleSelection';
import LoginForm from './components/Auth/LoginForm';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import ProfessorDashboard from './components/Dashboard/ProfessorDashboard';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [role,setRole] = useState(null);
  const [loggedIn, setLoggedIn]= useState(false);
  if(!role) return <RoleSelection onSelect={setRole} />;
  if (!loggedIn) return <LoginForm role={role} onBack={()=>setRole(null)} onLogin={()=>setLoggedIn(true)}/>;
  if(role=="admin") return <AdminDashboard/>;
  if(role=="student") return <StudentDashboard/>;
  if (role=="professor") return <ProfessorDashboard/>;

  return null;
}
// export default function App() {
//   return <h1 className="text-4xl text-center mt-10">App is running</h1>;
// }

export default App;
