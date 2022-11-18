
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function LoginForm() {



  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/anasayfa', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField name="email"
              fullWidth
              label="Email" />

          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Şifre"
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
        </Grid>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>

        <Link variant="subtitle2" underline="hover">
          Şifrenizi unuttunuz mu?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Giriş Yap
      </LoadingButton>
    </>
  );
}
