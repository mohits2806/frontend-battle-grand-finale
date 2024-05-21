// App.js
import './style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToggleMode from './components/ToggleMode';
import Feed from './components/Feed';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Connections from './components/Connections';
import Message from './components/Message';
import Notification from './components/Notification';
import Jobs from './components/Jobs';
import Company from './components/Company';

function App() {
  const [mode, setMode] = useState('light');  // Default theme

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setMode(currentTheme);
    }
  }, []);

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <Router>
      <Navbar />
      <ToggleMode mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/edit" element={<EditProfile />} />
        <Route exact path="/connections" element={<Connections />} />
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/company" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;
