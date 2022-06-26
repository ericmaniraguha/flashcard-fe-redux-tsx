import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlineLogin } from 'react-icons/ai';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://flacardcliminallaw.com/'>
        flacardcliminallaw.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const CREATE_LOGIN_MUTATION = gql`
  mutation loginMutation($password: String!, $email: String!) {
    login(email: $email, password: $password) {
      token
      user {
        names
      }
    }
  }
`;

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onhandChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const [loginUser, { error }] = useMutation(CREATE_LOGIN_MUTATION, {
    onError: (error) => {
      console.log(error.message);
    },
    onCompleted: (loginUser) => {
      localStorage.setItem('auth', loginUser.login.token);
      navigate('/card');
    },
    variables: {
      password: password,
      email: email,
    },
  });
  const onsubmit = async (e: any) => {
    e.preventDefault();
    const existingToken = await loginUser();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AiOutlineLogin />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={onsubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              onChange={onhandChangeEmail}
              autoFocus
              size='small'
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={handleChangePassword}
              size='small'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='success'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
