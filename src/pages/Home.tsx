import React from 'react';
import lawImage from '../images/lawImage.png';
import { Typography } from '@mui/material/';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HeadSidebar from '../components/SidebarResp';
import Container from '@mui/material/Container';

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <HeadSidebar />
      <div style={{ padding: 30, marginTop: 25 }}>
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
    </Container>
  );
};

export default Home;
