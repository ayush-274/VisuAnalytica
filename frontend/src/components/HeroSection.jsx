// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function HeroSection() {
  return (
    <Box sx={{ textAlign: 'center', py: 8, background: '#f5f6fa' }}>
      <Typography variant="h2" fontWeight="bold" mb={2}>
        No-Code Data Analytics &amp; ML for Everyone
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={3}>
        Empowering you to analyze, visualize, and model data—without writing a single line of code.
      </Typography>
      <Button variant="contained" size="large" color="primary">
        Get Started
      </Button>
    </Box>
  );
}
