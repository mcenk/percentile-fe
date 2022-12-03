

import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormControl, InputAdornment, InputLabel, MenuItem, Paper, Select } from '@mui/material';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Player } from '@lottiefiles/react-lottie-player';
import CalculatorAnimation from '../lottie/calculator.json';




const theme = createTheme();

export default function PercentileCalculator() {

    const [age, setAge] = React.useState('');
    const [date, setDate] = React.useState(new Date().getDate().toString())

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                
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
              
                        <Player src={CalculatorAnimation} autoplay loop style={{ marginBottom: '20px', height: '200px', width: '200px' }} />

                        <Typography component="h1" variant="h5" textAlign={'center'} >
                            Percentile Calculator
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 2 }}>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ mb: 4, }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="calcutalator-select-label">My Children</InputLabel>
                                        <Select
                                            labelId="calculator-select-label"
                                            id="calc-select"
                                            value={age}
                                            // autoFocus
                                            label="My Children"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        name="Calc_Height"
                                        required
                                        fullWidth
                                        id="calc-height"
                                        label="Height"
                                        autoFocus
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="calc-weight"
                                        label="Weight"
                                        name="Calc_Weight"
                                        autoFocus
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="calc-date"
                                        label="Calculation Date"
                                        fullWidth
                                        type="date"
                                        name='Calc_Date'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoFocus
                                        fullWidth
                                        id="calc-head"
                                        label="Head Circumference"
                                        name="Calc_Head"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                                        }}

                                    />
                                </Grid>


                            </Grid>
                            <Box textAlign={'center'}  >
                                <Button
                                    type="submit"
                                    alignItems="center"
                                    variant="contained"

                                    sx={{ width: 200, mt: 4, mb: 2, height: 40 }}
                                >
                                    Calculate
                                </Button>
                            </Box>
                        </Box>
                    
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
