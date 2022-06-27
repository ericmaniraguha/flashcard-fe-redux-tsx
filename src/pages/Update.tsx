import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlineLogin } from 'react-icons/ai';
import { gql, useMutation } from '@apollo/client';
import Inputs from '../components/Input';

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

const UPDATE_CARD = gql`
  mutation updateCard($names: String!, $password: String!, $email: String!) {
    creatNewCard(question: $question, answer: $answer) {
      token
      user {
        names
        email
      }
    }
  }
`;

const theme = createTheme();

export default function UpdateCard() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChangeAnswer = (e: any) => {
    setAnswer(e.target.value);
  };
  const onhandChangeQuestion = (e: any) => {
    setQuestion(e.target.value);
  };
  const onsubmit = async (e: any) => {
    e.preventDefault();
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
            Update Card
          </Typography>
          <Box component='form' onSubmit={onsubmit} noValidate sx={{ mt: 1 }}>
            <Inputs
              label={'question'}
              sx={{
                width: 420,
                height: 50,
                margin: '20px 0px 0px 16px',
              }}
              type={'text'}
              value={question}
              onchange={onhandChangeQuestion}
            />
            <Inputs
              label={'answer'}
              sx={{
                width: 420,
                height: 50,
                margin: '20px 0px 0px 16px',
              }}
              type={'text'}
              value={answer}
              onchange={handleChangeAnswer}
            />

            <Button
              value='Update'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='/createNewCard' variant='body2'>
                  Create new Card
                </Link>
              </Grid>
              <Grid item>
                <Link href='/deleteCard' variant='body2'>
                  {'Delete a card'}
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
