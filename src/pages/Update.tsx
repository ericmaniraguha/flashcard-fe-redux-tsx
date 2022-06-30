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
import { gql, useMutation, useQuery } from '@apollo/client';
import { TextareaAutosize } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

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
const GET_ONE_CARD = gql`
  query ($id: Int!) {
    getOneCard(id: $id) {
      question
      answer
    }
  }
`;

const UPDATE_CARD = gql`
  mutation updateMutation($question: String!, $answer: String!, $id: Int!) {
    updateCard(question: $question, answer: $answer, id: $id) {
      question
      answer
      id
    }
  }
`;

const theme = createTheme();

export default function UpdateCard() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { id } = useParams();
  const paramsId: any = id;
  const Id = parseInt(paramsId);
  const { refetch, loading, data } = useQuery(GET_ONE_CARD, {
    variables: { id: Id },
    onCompleted: (data) => {
      setQuestion(data.getOneCard.question);
      setAnswer(data.getOneCard.answer);
    },
  });

  const handleChangeAnswer = (e: any) => {
    setAnswer(e.target.value);
  };
  const onhandChangeQuestion = (e: any) => {
    setQuestion(e.target.value);
  };

  const [UpdateCard] = useMutation(UPDATE_CARD, {
    onCompleted: (UpdateCard) => {
      toast.success(' Card Updated Successfully.');
      navigate('/adminpanel');
    },
    onError: (error) => {
      toast.error('Update has been failed!');
    },
    variables: {
      question: question,
      answer: answer,
      id: Id,
    },
  });
  const onsubmit = async (e: any) => {
    e.preventDefault();
    await UpdateCard();
  };
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
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
          {!data ? (
            <CircularProgress sx={{ margin: 30 }} />
          ) : (
            <Box
              component='form'
              id='formname'
              onSubmit={onsubmit}
              // noValidate
              sx={{ mt: 1 }}
            >
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
                Update Card
              </Button>
              <Grid container>
                <Grid item>
                  <Link href='/adminpanel' variant='body2'>
                    {'Admin-Panel.'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
