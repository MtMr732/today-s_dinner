import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  padding:'5',
})
const Menu = (props)=> {
  return (
    <Paper elevation={3}
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth:400,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' :
          props.color,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="no image" src="" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs >
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" gutterBottom className='text'>
                {props.content}
              </Typography>
              <DeleteForeverIcon onClick={() => props.handleDelete(props.id)} className={"removeCircle"} sx={{ color: 'error.main' }}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Menu;
