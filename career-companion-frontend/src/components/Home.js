import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Career Companion
      </Typography>
      <Typography variant="h6">
        Your AI-powered assistant for career growth.
      </Typography>
      <Typography>
        Explore features like resume building, interview simulation, career coaching, and skill recommendations.
      </Typography>
    </Container>
  );
}

export default Home;
