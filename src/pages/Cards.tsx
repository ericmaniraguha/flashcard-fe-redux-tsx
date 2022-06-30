import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactCardFlip from 'react-card-flip';
import CircularProgress from '@mui/material/CircularProgress';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import HeadSidebar from '../components/SidebarResp';
import { MenuItem, TextField } from '@mui/material';

const DISPLAY_ALL_CARDS = gql`
  query ($orderBy: Sort) {
    getAllCards(orderBy: $orderBy) {
      question
      answer
      id
    }
  }
`;

function DisplayAllCards() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [orderBy, setOrderBy] = useState();
  const [flippedCard, setFlippedCard] = useState(0);

  const { refetch, loading, data } = useQuery(DISPLAY_ALL_CARDS, {
    variables: {
      orderBy: orderBy,
    },
  });
  const flipCard = (id: number, e: any) => {
    setIsFlipped(!isFlipped);
    setFlippedCard(id);
  };

  useEffect(() => {
    refetch();
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <HeadSidebar />
      <Grid container spacing={5} sx={{ margin: '100px 0 0 100px' }}>
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
            sx={{ ml: 20, mt: -5, lg: 30, md: 20, sm: 15, xs: 10 }}
          >
            <AssignmentRoundedIcon />
            Display All Cards
          </Typography>
        </Grid>
        <Grid container spacing={5} sx={{ margin: '50px 0 0 10px' }}>
          <TextField
            onChange={(e: any) => setOrderBy(e.target.value)}
            value={orderBy}
            label='sort'
            select
            variant='outlined'
            sx={{ width: '200px' }}
          >
            {[
              { value: 'asc', label: 'asc' },
              { value: 'desc', label: 'desc' },
            ].map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {loading ? (
          <CircularProgress sx={{ margin: 30 }} />
        ) : (
          <>
            {data.getAllCards.map((card: any) => (
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
                    <Typography
                      variant='h6'
                      color='text.secondary'
                    ></Typography>
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
    </Box>
  );
}
export default DisplayAllCards;
