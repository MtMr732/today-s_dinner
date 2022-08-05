import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './assets/styles/style.css';
import datesetDefault from './dataset';
import AddMenus from './AddMenus';
import * as React from 'react';
import MenuList from "./MenuList"
import DecideMenu from './DecideMenu';
import { grey } from '@mui/material/colors';

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
        color: '#fff',
      }
      this.getMenus = this.getMenus.bind(this);
      this.changeColor = this.changeColor.bind(this);
    }

  getMenus = () => {
    const menus = this.state.dateset;
    const mainMenu = menus.Menus.mainMenu;
    const sideMenu = menus.Menus.sideMenus;
    const garnish = menus.Menus.garnish;

    this.setState({
      menus:menus,
      mainMenu:mainMenu,
      sideMenu:sideMenu,
      garnish:garnish
    })
  }

  componentDidMount(){
    this.getMenus();
  }

  changeColor = () =>{
    const number = Math.floor(Math.random() * 10);

    const changedColor = '#FF6633';
    this.setState({
      color:changedColor
    })
    console.log(this.state.color);
  }

    render() {
      return (
        <React.Fragment>
          <section className='menus'>
            <MenuList menus={this.state.mainMenu} color ={this.state.color}></MenuList>
            <MenuList menus={this.state.sideMenu} color ={this.state.color}></MenuList>
            <MenuList menus={this.state.garnish} color ={this.state.color}></MenuList>
          </section>
          <section className='decide-button'>
            <DecideMenu changeColor = {this.changeColor}></DecideMenu>
          </section>
          <section className='add-menu'>
            <AddMenus getMenus = {this.getMenus}>
            </AddMenus>
          </section>
        </React.Fragment>
      );
    }
}