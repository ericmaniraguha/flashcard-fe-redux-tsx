import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import { Inputprops } from '../types/Pros';

const Inputs: FC<Inputprops> = ({ label, sx, onchange, value, type }) => (
  <TextField
    value={value}
    type={type}
    label={label}
    onChange={onchange}
    style={sx}
    variant='outlined'
  />
);

export default Inputs;
