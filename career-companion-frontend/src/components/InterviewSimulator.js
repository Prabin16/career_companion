import React, { useState } from 'react';
import { Container, TextField, Button, Typography, List, ListItem } from '@mui/material';

function InterviewSimulator() {
  const [jobTitle, setJobTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleGenerateQuestions = async () => {
    const response = await fetch('/interview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job_title: jobTitle }),
    });
    const data = await response.json();
    setQuestions(data.questions.split('\n'));
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Interview Simulator
      </Typography>
      <TextField
        label="Job Title"
        fullWidth
        margin="normal"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
        onClick={handleGenerateQuestions}
      >
        Generate Questions
      </Button>
      {questions.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <Typography variant="h5" gutterBottom>
            Interview Questions:
          </Typography>
          <List>
            {questions.map((question, index) => (
              <ListItem key={index}>{question}</ListItem>
            ))}
          </List>
        </div>
      )}
    </Container>
  );
}

export default InterviewSimulator;
