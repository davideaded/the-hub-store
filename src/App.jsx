import './App.css';
import Store from './components/Store.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
