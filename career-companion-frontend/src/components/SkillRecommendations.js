import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Chip, Box } from '@mui/material';

function SkillRecommendations() {
  const [currentRole, setCurrentRole] = useState('');
  const [skills, setSkills] = useState([]);

  const handleGetSkills = async () => {
    const response = await fetch('/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current_role: currentRole }),
    });
    const data = await response.json();
    setSkills(data.skills.split(','));
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Skill Recommendations
      </Typography>
      <TextField
        label="Current Role"
        fullWidth
        margin="normal"
        value={currentRole}
        onChange={(e) => setCurrentRole(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
        onClick={handleGetSkills}
      >
        Get Recommendations
      </Button>
      {skills.length > 0 && (
        <Box style={{ marginTop: '30px' }}>
          <Typography variant="h5" gutterBottom>
            Recommended Skills:
          </Typography>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill.trim()}
              style={{ marginRight: '5px', marginBottom: '5px' }}
            />
          ))}
        </Box>
      )}
    </Container>
  );
}

export default SkillRecommendations;
