import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, createTheme, InputAdornment, MenuItem, Paper, ThemeProvider } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';




const genders = [
  {
    value: 'Kız',
    label: 'Kız',
  },
  {
    value: 'Erkek',
    label: 'Erkek',
  }

];


const theme = createTheme(); 

export default function SaveChild()  {

   const [firstName,setFirstName]= React.useState('');
  // const [lastName, setLastName]=  React.useState('');
  const [gender, setgender] = React.useState('');
  const [birthday,setBirthday]= React.useState('');
  // const [birhtweight,setBirthWeight]= React.useState('');
  // const [birthheight,setBirthHeight]= React.useState('');
  // const [childInfo,setChildInfo]= React.useState('');


  // React.useEffect(() => {
  //   axios.get(`/child`)
  //   .then(res => {
  //     const persons = res.data;
  //    persons.map(e=>e{
      
  //    })
    

  
      
  //   })
  // },[])


  const handleChange = (event) => {
    setgender(event.target.value);
  };

  const handleChangeDate = (event) => {
    setBirthday(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body= {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender,
      birthday,
      birthWeight: data.get('birthweight'),
      birthHeight:data.get('birthheight'),
      childInfo: data.get('childInfo')

    };
    console.log(body);

    axios.post("/child/savechild", body);
    
  };

  return (
    
  
     <ThemeProvider theme={theme}>


      <Paper variant="outlined" sx={{
        pt: 20,
        p: 2,
        marginTop: '100px',
        margin: 'auto',
        maxWidth: 800,
        // flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }} >

        <Typography variant="h6" gutterBottom>
          Cocuk Ekle
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label={firstName}
              fullWidth
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Soyad"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-select-gender"
              select
              fullWidth
              label="Cinsiyet"
              value={gender}
              onChange={handleChange}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid >


          <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              label="Doğum Tarihi"
              type="date"
              fullWidth

              defaultValue="2022-01-01"
              onChange={handleChangeDate}
              InputLabelProps={{
                shrink: true,
              }}
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Doğum kilosunu giriniz"
              id="birthweight"
              name='birthweight'
              fullWidth
              // sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Doğum boyunu giriniz"
              id="birthheight"
              name='birthheight'
              fullWidth
              // sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">cm</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="childInfo"
              name="childInfo"
              label="Eklemek istediğiniz bilgi var mı?"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item xs={6} sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 800,
          }}>
            <LoadingButton  fullWidth size="large" type="submit" variant="contained" >
              Giriş Yap
            </LoadingButton>
          </Grid>
          {/* <Grid >
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        </Grid>
        </Box>

        
      </Paper>
      </ThemeProvider>
   
  );
}
