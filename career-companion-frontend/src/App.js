import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ResumeBuilder from './components/ResumeBuilder';
import InterviewSimulator from './components/InterviewSimulator';
import CareerCoaching from './components/CareerCoaching';
import SkillRecommendations from './components/SkillRecommendations';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Career Companion
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/resume">Resume Builder</Button>
          <Button color="inherit" component={Link} to="/interview">Interview Simulator</Button>
          <Button color="inherit" component={Link} to="/coaching">Career Coaching</Button>
          <Button color="inherit" component={Link} to="/skills">Skill Recommendations</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/interview" element={<InterviewSimulator />} />
        <Route path="/coaching" element={<CareerCoaching />} />
        <Route path="/skills" element={<SkillRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
