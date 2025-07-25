import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  // Place the hook call here, before 'return'
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', py: 8, background: '#f5f6fa' }}>
      <Typography variant="h2" fontWeight="bold" mb={2}>
        No-Code Data Analytics &amp; ML for Everyone
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={3}>
        Empowering you to analyze, visualize, and model data—without writing a single line of code.
      </Typography>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={() => navigate('/register')}
      >
        Get Started
      </Button>
    </Box>
  );
}
