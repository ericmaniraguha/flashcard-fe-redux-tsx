import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from '../components/Sidebar';
import { useQuery, useMutation, gql } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';

const USER_OWNER_CARDS = gql`
  query {
    getOwnersCard {
      question
      answer
      id
    }
  }
`;

const DELETE_CARD = gql`
  mutation ($id: Int!) {
    deleteCard(id: $id)
  }
`;
const theme = createTheme();

export default function AdminPanel() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState(0);
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const { refetch, loading, data } = useQuery(USER_OWNER_CARDS);

  const [deleteCardMutation] = useMutation(DELETE_CARD, {
    onCompleted: () => {
      toast.success('The card has been deleted successfully.');
    },
    variables: {
      id: id,
    },
  });
  const navigationUpdate = (id: number) => {
    navigate(`/updateCard/${id}`, { state: { id } });
  };

  const flipCard = (id: number, e: any) => {
    setIsFlipped(!isFlipped);
    setFlippedCard(id);
  };

  const deleteCard = async (e: any, id: number) => {
    e.preventDefault();
    setId(id);
    console.log(id);
    await deleteCardMutation();
    refetch();
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />

      <Toaster />
      <Grid container spacing={5} sx={{ margin: '80px 0 0 100px' }}>
        <Grid
          container
          spacing={5}
          sx={{ margin: '10px 0 0 0' }}
          textAlign='center'
        >
          <Typography
            variant='h4'
            fontSize={30}
            className='p'
            fontFamily='Josefin Sans, sans-serif'
            fontWeight={900}
            color='#00095E'
            sx={{ ml: 45, mt: -5 }}
          >
            <AccountBoxOutlinedIcon />
            User's Cards
          </Typography>
        </Grid>
        {loading ? (
          <CircularProgress sx={{ margin: 30 }} />
        ) : (
          <>
            {data.getOwnersCard.map((card: any) => (
              <Card
                onClick={(e) => flipCard(card.id, e)}
                sx={{ maxWidth: 345, marginTop: '20px', marginRight: '20px' }}
                style={{ backgroundColor: '#8fadcc' }}
              >
                <ReactCardFlip isFlipped={isFlipped && flippedCard === card.id}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='div'
                      color='#00095E'
                    >
                      <QuestionAnswerIcon />
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {card.question}
                    </Typography>

                    <CardContent>
                      <CardActions sx={{ mt: 5, ml: 5 }}>
                        <Button
                          size='small'
                          variant='contained'
                          color='error'
                          onClick={(e) => deleteCard(e, card.id)}
                        >
                          <DeleteForeverSharpIcon />
                          Delete
                        </Button>
                        <CardActions>
                          {' '}
                          <Button
                            size='small'
                            variant='contained'
                            onClick={() => navigationUpdate(card.id)}
                          >
                            <BrowserUpdatedOutlinedIcon />
                            Update
                          </Button>
                        </CardActions>
                      </CardActions>
                    </CardContent>
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                      <QuestionAnswerTwoToneIcon />
                      Answer
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {card.answer}
                    </Typography>
                  </CardContent>
                </ReactCardFlip>
              </Card>
            ))}
          </>
        )}
      </Grid>
    </ThemeProvider>
  );
}
