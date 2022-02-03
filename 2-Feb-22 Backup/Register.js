import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import {Button,MenuItem,} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Footer from '../components/Footer';
import Image from '../image.png';


const theme = createTheme();

const Register = ()=> {
  const [firstName,setfirstName] = useState('')
  const [lastName,setlastName] = useState('')
  const [mobileNumber,setmobileNumber] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [securityQuestion,setsecurityQuestion] = useState('')
  const [answer,setAnswer] = useState('')

  const User = {
    firstName,
    lastName,
    mobileNumber,
    email,
    password,
    securityQuestion,
    answer
  }
   const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/user/register',User).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err);
    })

  };
  const question =[{
    value:"What is your Nickname",
    label:"What is your Nickname"
  },
    {
      value:"Your first mobilenumber",
      label:"Your first mobilenumber"
    },
    {
      value:"Your Favorite place",
      label:"Your Favorite place"
    }
]
  return (
    <div>
       <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            mt:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={e=>setfirstName(e.target.value)}
                  value={firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={e=>setlastName(e.target.value)}
                  value={lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  label="Mobile number "
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                  type="number"
                  onChange={e=>setmobileNumber(e.target.value)}
                  value={mobileNumber}
                  
                />
              </Grid>
            <Grid container spacing={2} sx={{m:0.1}}>
              <Grid item xs={12} sm={6}>
              <TextField
              
              id="securityQuestion"
              select
              label="Security Question"
              onChange={e=>setsecurityQuestion(e.target.value)}
              value={securityQuestion}
              fullWidth
            >
          {question.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="asnwer"
                  label="Answer "
                  name="asnwer"
                  autoComplete="asnwer"
                  type="text"
                  onChange={e=>setAnswer(e.target.value)}
                  value={answer}
                  
                />
              </Grid>
              </Grid>


              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e=>setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={e=>setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to="/login">Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default Register