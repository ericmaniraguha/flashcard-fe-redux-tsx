import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
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
import { SiGnuprivacyguard, SiAboutdotme } from 'react-icons/si';

const CREATE_USER_MUTATION = gql`
  mutation SignupMutation(
    $names: String!
    $password: String!
    $email: String!
  ) {
    Signup(email: $email, names: $names, password: $password) {
      token
      user {
        names
      }
    }
  }
`;

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [names, setNames] = useState('');
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const onhandChangeNames = (e: any) => {
    setNames(e.target.value);
  };
  const onhandChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION, {
    onError: (error) => {
      console.log(error.message);
    },
    onCompleted: (createUser) => {
      localStorage.setItem('auth', createUser.Signup.token);
      navigate('/card');
    },
    variables: {
      names: names,
      password: password,
      email: email,
    },
  });

  const onsubmit = async (e: any) => {
    e.preventDefault();
    const existingToken = await createUser();

    console.log('token', existingToken);
  };

  function Copyright(props: any) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}
      >
        {'Copyright © '}
        <Link color='inherit' href='https://flashcardcriminallaw.com/'>
          flashcardcriminallaw.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

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
            <SiGnuprivacyguard />,
          </Avatar>
          <Typography component='h1' variant='h5'>
            Signup
          </Typography>
          <Box onSubmit={onsubmit} component='form' noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='names'
              label='Full Names'
              name='names'
              autoComplete='names'
              autoFocus
              size='small'
              type={'text'}
              value={names}
              onChange={onhandChangeNames}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              size='small'
              type={'email'}
              value={email}
              onChange={onhandChangeEmail}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              id='password'
              size='small'
              autoComplete='current-password'
              type={'password'}
              value={password}
              onChange={handleChangePassword}
            />

            <Button
              value={'Signup'}
              type='submit'
              fullWidth
              variant='contained'
            
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/login' variant='body2'>
                  {'You have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
