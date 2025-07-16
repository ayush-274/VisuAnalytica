// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ mt: 6, py: 2, background: '#ececec', textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} VisuAnalytica &nbsp;|&nbsp;
        <Link href="#">About</Link> &nbsp;|&nbsp;
        <Link href="#">Docs</Link> &nbsp;|&nbsp;
        <Link href="#">Terms</Link> &nbsp;|&nbsp;
        <Link href="#">Privacy</Link>
      </Typography>
    </Box>
  );
}
