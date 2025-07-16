// src/components/Features.jsx
import React from 'react';
import { Box } from '@mui/material';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { CloudUpload, BarChart, Timeline, Psychology, Lock } from '@mui/icons-material';

const features = [
  { icon: <CloudUpload fontSize="large" />, title: 'Upload Data', desc: 'Import CSV/Excel files and manage datasets.' },
  { icon: <BarChart fontSize="large" />, title: 'EDA', desc: 'One-click stats and interactive profiling.' },
  { icon: <Timeline fontSize="large" />, title: 'Visualization', desc: 'Create charts with drag-and-drop.' },
  { icon: <Psychology fontSize="large" />, title: 'Smart Insights', desc: 'AI-driven recommendations and insights.' },
  { icon: <Lock fontSize="large" />, title: 'Secure Workspaces', desc: 'Protect your work and collaborate easily.' }
];

export default function Features() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
        Platform Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((f, idx) => (
          <Grid item xs={12} md={2.4} key={f.title}>
            <Card sx={{ minHeight: 200, textAlign: "center", py: 2 }}>
              {f.icon}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{f.title}</Typography>
                <Typography variant="body2" color="text.secondary">{f.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
