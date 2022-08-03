import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './assets/styles/style.css';
import datesetDefault from './dataset';
import AddMenus from './AddMenus';
import * as React from 'react';
import MenuList from "./MenuList"

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
        menus: [],
        mainMenu:[],
        sideMenu:[],
        garnish:[],
        dateset: datesetDefault,
        open: false,
      }
      this.getMenus = this.getMenus.bind(this)
    }

  getMenus = () => {
    const menus = this.state.dateset;
    const mainMenu = menus.Menus.mainMenu;
    const sideMenu = menus.Menus.sideMenus;
    const garnish = menus.Menus.garnish;
    // console.log(menus);

    this.setState({
      menus:menus,
      mainMenu:mainMenu,
      sideMenu:sideMenu,
      garnish:garnish
    })
  }

  componentDidMount(){
    this.getMenus()
  }

    render() {
      return (
        <React.Fragment>
          <section className='menus'>
            <MenuList menus={this.state.mainMenu}></MenuList>
            <MenuList menus={this.state.sideMenu}></MenuList>
            <MenuList menus={this.state.garnish}></MenuList>
          </section>
          <section className='add-menu'>
            <AddMenus getMenus = {this.getMenus}>
            </AddMenus>
          </section>
        </React.Fragment>
      );
    }
}