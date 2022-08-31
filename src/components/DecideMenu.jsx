import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const DecideMenu = (props) => {


  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={props.changeColor}>献立を決める</Button>
    </Stack>
  );
}
export default DecideMenu