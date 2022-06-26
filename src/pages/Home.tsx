import React from 'react';
import styled from 'styled-components';
import lawimage from '../images/woman-lawyer-svgrepo-com.svg';
import lawImage from '../images/lawImage.png';
import { Typography } from '@mui/material/';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const HomeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

const Home: React.FunctionComponent = () => {
  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={3} justify='center'>
        <Grid item xs={10}>
          <Card>
            <CardContent>
              <Typography align='center' color='primary' variant='h3'>
                {' '}
                Welcome to Criminal Law Flashcards!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} lg={6}>
          <Card>
            <CardContent>
              <img src={lawImage} alt='logo' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
