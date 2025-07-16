// src/components/ValueProposition.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const points = [
  "True no-code analytics interface",
  "Full pipeline: EDA, Visualization, Machine Learning",
  "AI recommendations and insights",
  "User-friendly, secure, and collaboration ready"
];

export default function ValueProposition() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
        Why VisuAnalytica?
      </Typography>
      <List sx={{ maxWidth: 500, margin: 'auto' }}>
        {points.map((pt, idx) => (
          <ListItem key={idx}>
            <ListItemIcon>
              <CheckCircle color="primary" />
            </ListItemIcon>
            <ListItemText primary={pt} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
