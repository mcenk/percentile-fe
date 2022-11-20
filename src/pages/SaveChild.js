import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, createTheme, InputAdornment, MenuItem, Paper, ThemeProvider } from '@mui/material';
import { DatePicker, LoadingButton } from '@mui/lab';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';




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

   const [name,setName]= React.useState('');

  const [value, setValue] = React.useState(dayjs('2022-04-07'));
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
      name: data.get('name'),
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
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="name"
              name="name"
              label='Ad soyad'
              fullWidth
              autoComplete="given-name"
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


          {/* <Grid item xs={12} sm={6}>
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
            /> */}


          <Grid item xs={12} sm={6} >
            <DatePicker
              views={['year', 'month']}
              label="Year and Month"
              minDate={dayjs('2012-03-01')}
              maxDate={dayjs('2023-06-01')}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} helperText={null} />}
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
