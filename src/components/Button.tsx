import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Buttonprops } from '../types/Pros';
import CircularProgress from '@mui/material/CircularProgress';

const Buttons: FC<Buttonprops> = ({ value, loading, ...props }) => {
  console.log(loading);
  return (
    <Button type='submit' variant='contained' {...props}>
      {loading ? <CircularProgress color='success' /> : value}
    </Button>
  );
};

export default Buttons;
