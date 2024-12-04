import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
import jsPDF from 'jspdf';
import { marked } from 'marked';

function ResumeBuilder() {
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [resume, setResume] = useState('');

  const handleGenerateResume = async () => {
    const response = await fetch('/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job_title: jobTitle, skills: skills.split(',') }),
    });
    const data = await response.json();
    setResume(data.resume);
  };

  const handleDownloadResume = () => {
    if (!resume) {
      alert('Please generate a resume first!');
      return;
    }

    const doc = new jsPDF();
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(12);

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const lineHeight = 10;

    const markdownLines = resume.split('\n');
    let cursorY = margin;

    // Render title
    doc.text('Generated Resume', pageWidth / 2, cursorY, { align: 'center' });
    cursorY += 10;

    // Add Markdown content line by line
    markdownLines.forEach((line) => {
      if (cursorY + lineHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        cursorY = margin;
      }
      doc.text(line, margin, cursorY);
      cursorY += lineHeight;
    });

    doc.save('resume.pdf');
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Resume Builder
      </Typography>
      <TextField
        label="Job Title"
        fullWidth
        margin="normal"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <TextField
        label="Skills (comma-separated)"
        fullWidth
        margin="normal"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <Box style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerateResume}
        >
          Generate Resume
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDownloadResume}
          disabled={!resume} // Disable if no resume is generated
        >
          Download as PDF
        </Button>
      </Box>
      {resume && (
        <Card style={{ marginTop: '30px', backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Generated Resume:
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: marked(resume) }}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default ResumeBuilder;
