import * as React from 'react';
import Button from '@mui/material/Button';
import { Link, IconButton, InputAdornment, TextField } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import SignUpAnimation from '../lottie/signup.json';
import Iconify from '../components/iconify';


// COPYRIGHT SECTION

function Copyright(props) {
  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/mustafacenk/">
        mcenk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme(); 

export default function SignUp() {




const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body= {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    axios.post("/user/signup", body);
    
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
     


          <Player src={ SignUpAnimation } autoplay loop style={{marginBottom: '20px',height: '200px', width: '200px' }} />
      
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
    
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Ad Soyad"
                  name="name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Şifre"
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
            >
              Kayıt Ol
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Zaten bir hesabınız var mı? Giriş yapın!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}