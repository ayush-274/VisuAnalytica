import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Divider, Alert } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'; // Google "G" icon

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // ... registration logic ...
    };

    const handleGoogleRegister = () => {
        window.location.href = '/api/auth/google';
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                m: 'auto',
                mt: 8,
                p: 3,
                boxShadow: 2,
                borderRadius: 2,
                bgcolor: '#fff'
            }}
        >
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Create Your Account
            </Typography>
            <form onSubmit={handleRegister} autoComplete="off">
                <TextField
                    label="Email"
                    type="email"
                    variant="standard"
                    fullWidth
                    required
                    margin="normal"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    InputProps={{
                        classes: { underline: 'muifancy-underline' }
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                    required
                    margin="normal"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    InputProps={{
                        classes: { underline: 'muifancy-underline' }
                    }}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="standard"
                    fullWidth
                    required
                    margin="normal"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    error={confirmPassword.length > 0 && password !== confirmPassword}
                    helperText={(confirmPassword.length > 0 && password !== confirmPassword) ? "Passwords do not match" : ""}
                    InputProps={{
                        classes: { underline: 'muifancy-underline' }
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2, mb: 2 }}
                >
                    Register
                </Button>
            </form>
            <Divider sx={{ my: 2 }} />
            <Button
                onClick={handleGoogleRegister}
                variant="outlined"
                color="secondary"
                fullWidth
                startIcon={<FcGoogle style={{ fontSize: 24 }} />} // Icon on the left
            >
                Register with Google
            </Button>
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            {message && <Alert severity="success" sx={{ mt: 2 }}>{message}</Alert>}
            {/* Add the custom underline effect */}
            <style>
                {`
          .muifancy-underline:after {
            border-bottom: 2px solid #1976d2 !important;
            box-shadow: 0 0 6px #2196f3, 0 0 12px #90caf9;
            transition: box-shadow 0.2ss;
          }
          .muifancy-underline:hover:before {
            border-bottom: 2px solid #2196f3 !important;
          }
        `}
            </style>
        </Box>
    );
}
