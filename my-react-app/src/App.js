// ❌ DO NOT import BrowserRouter here anymore
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Login from './Login';
import Garage from './Garage';
import Timer from './Timer';
import Counter from './Counter';
import TutorialsListComponent from './components/tutorials-list.component';
import NoPage from './NoPage';
import UserCrud from './User-Management';

function App() {
  return (
    <div>
      {/* Simple Navigation Bar */}
      <nav style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/garage" style={{ marginRight: '10px' }}>Garage</Link>
        <Link to="/timer" style={{ marginRight: '10px' }}>Timer</Link>
        <Link to="/counter" style={{ marginRight: '10px' }}>Counter</Link>
        <Link to="/tutorials" style={{ marginRight: '10px' }}>Tutorials</Link>
        <Link to="/user-crud" style={{ marginRight: '10px' }}>User Management</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tutorials" element={<TutorialsListComponent />} />
        <Route path="/user-crud" element={<UserCrud />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
