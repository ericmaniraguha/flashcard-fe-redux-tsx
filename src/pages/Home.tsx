import React from 'react';
import styled from 'styled-components';
import lawimage from '../images/woman-lawyer-svgrepo-com.svg';
import { Typography } from '@mui/material/';

const HomeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;
// const Logimage = styled('lawimage')(() => ({
//   width: 80,
//   height: 80,
// }));

const Home: React.FunctionComponent = () => {
  return (
    <HomeText>
      <Typography>Home</Typography>

      <Typography variant='h6' sx={{ my: 2 }}>
        {/* <Logimage src={lawimage} /> */}
      </Typography>
    </HomeText>
  );
};

export default Home;
