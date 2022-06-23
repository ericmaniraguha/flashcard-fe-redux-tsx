import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function RecipeReviewCard() {
  const commonStyles = {
    bgcolor: 'background.paper',
    border: '0px solid',
    // width: '5rem',
    height: '5rem',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 545,
  };

  return (
    <Container>
      <Card sx={{ maxWidth: 545, mt: 8, ml: 25 }}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Card
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Jurisdiction for any claims "arising under" the Constitution,
            federal law, or United States treaties Jurisdiction for any claims
            "arising under" the Constitution, federal law, or United States
            treaties Jurisdiction for any claims "arising under" the
            Constitution, federal law, or United States treaties Jurisdiction
            for any claims "arising under" the Constitution, federal law, or
            United States treaties Jurisdiction for any claims "arising under"
            the Constitution, federal law, or United States treaties
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>

      <Box sx={{ ...commonStyles, ml: 25, mt: 2 }}>
        <Button
          variant='contained'
          size='large'
          sx={{
            color: 'black',
            backgroundColor: 'red',
            borderColor: 'green',
            p: 6.2,
          }}
        >
          1
        </Button>
        <Button
          variant='contained'
          size='large'
          sx={{
            color: 'black',
            backgroundColor: 'green',
            borderColor: 'green',
            p: 6.2,
          }}
        >
          2
        </Button>
        <Button
          variant='contained'
          size='large'
          sx={{
            color: 'black',
            backgroundColor: 'Yellow',
            borderColor: 'green',
            p: 6.2,
          }}
        >
          3
        </Button>
        <Button
          variant='contained'
          size='large'
          sx={{
            color: 'black',
            backgroundColor: 'brown',
            borderColor: 'green',
            p: 6.2,
          }}
        >
          4
        </Button>
        <Button
          variant='contained'
          size='large'
          sx={{
            color: 'black',
            backgroundColor: 'grey',
            borderColor: 'green',
            p: 6.2,
          }}
        >
          5
        </Button>
      </Box>
    </Container>
  );
}
