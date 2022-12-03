import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Paper, TextField, Grid, InputAdornment, IconButton, Box, FormControlLabel, Checkbox } from '@mui/material';
// hooks
import { LoadingButton } from '@mui/lab';
import { Player } from '@lottiefiles/react-lottie-player';

// components

// sections
// import { LoginForm } from '../sections/auth/login';
import LoginAnimation from '../lottie/login.json';

import Iconify from '../components/iconify';


// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));




// ----------------------------------------------------------------------

export default function LoginPage() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  // const handleClick = () => {
  //   navigate('/anasayfa', { replace: true });
  // };


  return (
    <>
      <Helmet>
        <title> Login | Percentile </title>
      </Helmet>

      <StyledRoot>

        <Container maxWidth="sm" sx={{}}>

          <Paper variant="outlined" sx={{
            borderRadius: 5,
            pt: 20,
            p: 2,
            marginTop: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: 800,
            boxShadow: 6,
            // flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }} >

            <Player src={LoginAnimation} autoplay loop style={{ marginBottom: '40px', height: '200px', width: '200px' }} />

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField name="email"
                  fullWidth
                  required
                  label="Email" />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  required
                  fullWidth
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
                />
                </Grid>
                <Grid item xs={12} sx={{mt:3, w:200}}>

                  <LoadingButton fullWidth size="large" type="submit" variant="contained" >
                    Login
                  </LoadingButton>
              </Grid>
            </Grid>
            </Box>



            <Stack direction="row" alignItems="left" justifyContent="space-between" sx={{ my: 2 }}>

              <Link variant="subtitle2" underline="hover">
                Forgot password?
              </Link>

      
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <Stack direction="row" spacing={2}  >
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button>
            </Stack>



            <Typography variant="body2" justifyContent='flex-end' sx={{ mt: 1, mb: 5, mr: 1 }}>

              Don't have an account? {''}
              <Link href='/signup' variant="subtitle2">Sign Up</Link>
            </Typography>
          </Paper>

        </Container>
      </StyledRoot>

    </>
  );
}
