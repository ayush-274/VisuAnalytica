// src/components/Workflow.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const steps = [
  "Upload your data",
  "Explore and visualize",
  "Preprocess and clean",
  "Build and evaluate models",
  "Export and share results"
];

export default function Workflow() {
  return (
    <Box sx={{ py: 4, background: '#f5f6fa' }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
        How It Works
      </Typography>
      <List sx={{ maxWidth: 500, margin: 'auto' }}>
        {steps.map((step, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={`${idx + 1}. ${step}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
