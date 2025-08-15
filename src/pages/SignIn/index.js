// File: src/pages/SignIn/index.js (Phiên bản TỐI GIẢN)

import React, { useState } from 'react';
// Bỏ import useNavigate và Link
import { Box, Button, TextField, Typography } from '@mui/material';
import './SignIn.css'; 

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "test@gmail.com" && password === "123456") {
            alert("Đăng nhập thành công! (Giả lập)");
        } else {
            setError("Email hoặc mật khẩu không chính xác.");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <div className="signin-image-panel"></div>
                <div className="signin-form-panel">
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        POD BOOKING
                    </Typography>
                    <Typography component="p" sx={{ mt: 2, mb: 2 }}>
                        Chào mừng bạn trở lại!
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                        <TextField
                            margin="normal" required fullWidth label="Email" name="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal" required fullWidth name="password" label="Mật khẩu" type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <Typography color="error" align="center" sx={{ mt: 1 }}>{error}</Typography>}
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.5, fontSize: '1rem' }}>
                            Đăng nhập
                        </Button>
                        <Typography variant="body2" align="center">
                            Chưa có tài khoản? <a>Tạo tài khoản</a>
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;