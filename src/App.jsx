import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './assets/styles/style.css';
import datesetDefault from './dataset';
import Menu from './Menu';
import AddMenus from './AddMenus';
import * as React from 'react';
import MenuList from "./MenuList"
import { render } from '@testing-library/react';

const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        dateset: datesetDefault,
        Menu: [],
        open: false,
      }
  }
    render() {
      return (
        <React.Fragment>
          <section className='menus'>
            <section className='main-menu'>
              <Menu>
              </Menu>
              <Menu>
              </Menu>
            </section>
          <section className='side-menu'>
            <Menu>
            </Menu>
          </section>
          <section className='other-menu'>
            <Menu>
            </Menu>
          </section>
          </section>
          <section className='add-menu'>
            <AddMenus >
            </AddMenus>
          </section>
          <MenuList></MenuList>
        </React.Fragment>
      );
    }
}