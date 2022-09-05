import './assets/styles/style.css';
import datasetDefault from './dataset';
import AddMenus from './components/AddMenus';
import React , { useState, useEffect, useRef} from 'react';
import MenuList from "./components/MenuList"
import DecideMenu from './components/DecideMenu';
import { Typography} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const App = () => {
  const [dataset,setDataset] = useState(datasetDefault);
  const [mainMenu,setMainMenu] = useState(dataset.Menus.mainMenu);
  const [sideMenu,setSideMenus] = useState(dataset.Menus.sideMenus);
  const [garnish,setGarnish] = useState(dataset.Menus.garnish);
  const [color,setColor] = useState("fff");
  const [todayMain,setTodayMain]= useState("");
  const [todaySide,setTodaySide] = useState("");
  const [todayGarnish,settodayGarnish] = useState("");


  const getMenus = (() => {
    // const menus = datasset;
    // mainMenu = menus.Menus.mainMenu;
    // sideMenu = menus.Menus.sideMenus;
    // garnish = menus.Menus.garnish;
      // setMainMenu(mainMenu);
      setMainMenu(mainMenu);
      setSideMenus(sideMenu);
      setGarnish(garnish);
  })
  
  useEffect(() =>{
    getMenus();
  })

  const changeColor = () => {
    const changedColor = '#FF6633';
    const selectedMenu = mainMenu[Math.floor(Math.random() * mainMenu.length)];
    console.log(selectedMenu);
    if(selectedMenu.id === mainMenu.id){
      setColor(changedColor);
    }
  }
  
    const displayMenu = () => {
      setTodayMain(mainMenu[Math.floor(Math.random() * mainMenu.length)].name);
      setTodaySide(sideMenu[Math.floor(Math.random() * sideMenu.length)].name);
      settodayGarnish(garnish[Math.floor(Math.random() * garnish.length)].name)
    }
  return (
    <React.Fragment>
      <section className='title'>today'sDinner</section>
      <section className='decide-button'>
        <DecideMenu displayMenu = {displayMenu}></DecideMenu>
        <section className='todayMenu'>
          <Typography variant="h6" gutterBottom>今夜の晩ごはん</Typography>
          <Typography variant="h6">メインディッシュ: {todayMain}</Typography>
          <Typography variant="h6" >副菜: {todaySide}</Typography>
          <Typography variant="h6" >付け合わせ: {todayGarnish}</Typography>
        </section>
        <AddMenus setMainMenu = {setMainMenu} setSideMenus={setSideMenus} setGarnish={setGarnish} className='add-menu'></AddMenus>
      </section>
      <section>
        <h3>メニュー一覧</h3>
      </section>
      <section className='menus'>
        <MenuList menus={mainMenu} color ={color} title = {"メインディッシュ"} setMenu={setMainMenu}></MenuList>
        <MenuList menus={sideMenu} color ={color} title = {"副菜"} setMenu={setSideMenus}></MenuList>
        <MenuList menus={garnish} color ={color} title = {"付け合わせ"} setMenu={setGarnish}></MenuList>
      </section>
    </React.Fragment>
  );
}
export default App;