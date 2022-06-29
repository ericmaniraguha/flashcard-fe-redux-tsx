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
import { gql, useMutation } from '@apollo/client';
import { TextareaAutosize } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import toast, { Toaster } from 'react-hot-toast';

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

const CREATE_CARD = gql`
  mutation Signup($question: String!, $answer: String!) {
    createNewCard(question: $question, answer: $answer) {
      question
      answer
    }
  }
`;

const theme = createTheme();

export default function CreateACard() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleChangeAnswer = (e: any) => {
    setAnswer(e.target.value);
  };
  const onhandChangeQuestion = (e: any) => {
    setQuestion(e.target.value);
  };
  const [createCard] = useMutation(CREATE_CARD, {
    onCompleted: (createCard) => {
      if (question === '' || answer === '') {
        toast.error('Empty field is not required.');
      } else {
        toast.success('Successful to create a card.');
      }
    },
    variables: {
      question: question,
      answer: answer,
    },
  });

  const onsubmit = async (e: any) => {
    e.preventDefault();
    const formName: any = document.getElementById('formname');
    await createCard();
    formName.reset();
    console.log(formName);
  };

  return (
    <ThemeProvider theme={theme}>
      <Toaster />
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
            <AddCardIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Create A card
          </Typography>
          <Box
            component='form'
            id='formname'
            onSubmit={onsubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* <Inputs
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
            /> */}
            <TextareaAutosize
              aria-label='minimum height'
              minRows={3}
              text-align='center'
              color=' blue'
              placeholder='Question'
              style={{ width: 420, height: 80 }}
              value={question}
              onChange={onhandChangeQuestion}
            />

            <TextareaAutosize
              aria-label='minimum height'
              minRows={3}
              placeholder='Answer'
              style={{ width: 420, height: 150 }}
              value={answer}
              onChange={handleChangeAnswer}
            />

            <Button
              value='Create'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Create a card
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/adminpanel' variant='body2'>
                  {'Admin-Panel.'}
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
