import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './assets/styles/style.css';
import datesetDefault from './dataset';
import Menus from './Menus';
import AddMenus from './AddMenus';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));

export default function App(){
    // super(props);
    //   this.state = {
    //     dateset: datesetDefault,
    //     menus: [],
    //     open: false,
    //   }

    return (
      <React.Fragment>
        <Menus>
        </Menus>
        <Menus>
        </Menus>
        <Menus>
        </Menus>
        <AddMenus>

        </AddMenus>
      </React.Fragment>
    );
}