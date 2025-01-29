import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import Layout from './pages/Layout';
import About from './pages/About';
import Organization from './pages/Organization';
import Candidate from './pages/Candidate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route  path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='about' element={<About />} />
          <Route path='organization' element={<Organization />} />
          <Route path='candidate' element={<Candidate />} />
        </Route>
        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;