import * as React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, createTheme, InputAdornment, MenuItem, Paper, ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import {  LoadingButton } from '@mui/lab';
import dayjs from 'dayjs';
import { Player } from '@lottiefiles/react-lottie-player';
import AddAnimation from '../lottie/addchild.json';





const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
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
   <Helmet>
        <title> Home | Percentile </title>
      </Helmet>

      <Paper variant="outlined" sx={{
        borderRadius: 5,
        pt: 20,
        p: 2,
        marginTop: '100px',
        margin: 'auto',
        maxWidth: 800,
        boxShadow: 6,
        // flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }} >
          <Player src={ AddAnimation } autoplay loop style={{marginBottom: '20px',height: '250px', width: '250px' }} />

        {/* <Typography variant="h6" gutterBottom textAlign={"center"}>
         Add New Child
        </Typography> */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{  }}>


        <Grid container spacing={3}>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="name"
              name="name"
              label='Name'
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
              label="Gender"
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
              label="Birthday"
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
              label="Birth Weight"
              id="birth-weight"
              name='Birth_Weight'
              fullWidth
              // sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Birth Height"
              id="birth-height"
              name='Birth_Height'
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
              label="Is there a note you want to add?"
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
              Save
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
