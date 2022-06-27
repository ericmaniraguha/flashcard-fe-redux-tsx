import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactCardFlip from 'react-card-flip';
import CircularProgress from '@mui/material/CircularProgress';

const CARDS_QUERY = gql`
  query {
    getAllCards {
      id
      question
      answer
    }
  }
`;

function RecipeReviewCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flippedCard, setFlippedCard] = useState(0);
  const { data } = useQuery(CARDS_QUERY);
  const flipCard = (id: number, e: any) => {
    setIsFlipped(!isFlipped);
    setFlippedCard(id);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={6} sx={{ margin: '80px 0 0 100px' }}>
          <Typography
            align='center'
            color='primary'
            variant='h3'
            sx={{ mt: -10, ml: 35 }}
          >
            {' '}
            Display all cards
          </Typography>
          <Grid container spacing={6} sx={{ margin: '50px 0 0 500px' }}></Grid>
          {!data ? (
            <CircularProgress sx={{ margin: 30 }} />
          ) : (
            <>
              {data.getAllCards.map((card: any) => (
                <Card
                  onClick={(e) => flipCard(card.id, e)}
                  sx={{ maxWidth: 345, marginTop: '20px', marginRight: '20px' }}
                  style={{ backgroundColor: '#8fadcc' }}
                >
                  <ReactCardFlip
                    isFlipped={isFlipped && flippedCard === card.id}
                  >
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        {card.question}
                      </Typography>
                    </CardContent>

                    <CardContent>
                      <Typography color='primary' variant='h5'>
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
    </>
  );
}
export default RecipeReviewCard;
