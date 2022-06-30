import React from 'react';
import lawImage from '../images/lawImage.png';
import { Typography } from '@mui/material/';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DrawerAppBar from '../components/SidebarResp';
import Container from '@mui/material/Container';
import { Box } from '@material-ui/core';

const Home: React.FunctionComponent = () => {
  return (
    <Grid>
      <Grid style={{ backgroundColor: '#000080' }}>
        <DrawerAppBar />
      </Grid>

      <Grid style={{ maxHeight: '100%' }}>
        <Grid item style={{ padding: 200, marginTop: -110 }}>
          <Grid container spacing={3} justify='center'>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography align='center' color='primary' variant='h3'>
                    {' '}
                    Welcome to Criminal Law Flashcards!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8} lg={6}>
              <Card>
                <CardContent>
                  <img src={lawImage} alt='logo' />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
