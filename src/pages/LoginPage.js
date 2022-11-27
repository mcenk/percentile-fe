
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button} from '@mui/material';
// hooks
import { Player } from '@lottiefiles/react-lottie-player';

// components

import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import LoginAnimation from '../lottie/login.json';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
 
  return (
    <>
      <Helmet>
        <title> Login | Percentile </title>
      </Helmet>

      <StyledRoot>

        <Container maxWidth="sm">
          <StyledContent>
        
          <Player src={ LoginAnimation } autoplay loop style={{marginBottom: '20px',height: '200px', width: '200px' }} />
        
          <LoginForm/>
          <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                YA DA
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
            Hesabınız yok mu? {''}
              <Link href= '/signup' variant="subtitle2">Kayıt olun!</Link>
            </Typography>
          </StyledContent>
        </Container>
      </StyledRoot>
    
    </>
  );
}
