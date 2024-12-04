import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';

function CareerCoaching() {
  const [careerGoal, setCareerGoal] = useState('');
  const [advice, setAdvice] = useState('');

  const handleGetAdvice = async () => {
    const response = await fetch('/coaching', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ career_goal: careerGoal }),
    });
    const data = await response.json();
    setAdvice(data.advice);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Career Coaching
      </Typography>
      <TextField
        label="Career Goal"
        fullWidth
        multiline
        rows={3}
        margin="normal"
        value={careerGoal}
        onChange={(e) => setCareerGoal(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
        onClick={handleGetAdvice}
      >
        Get Advice
      </Button>
      {advice && (
        <Card style={{ marginTop: '30px', backgroundColor: '#e3f2fd' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Career Advice:
            </Typography>
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
              {advice}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default CareerCoaching;
