import './assets/styles/style.css';
import datasetDefault from './dataset';
import AddMenus from './components/AddMenus';
import React , { useState, useEffect} from 'react';
import MenuList from "./components/MenuList"
import DecideMenu from './components/DecideMenu';

const App = () => {
  const [dataset,setDataset] = useState(datasetDefault);
  const [mainMenu,setMainMenu] = useState(dataset.Menus.mainMenu);
  const [sideMenu,setSideMenus] = useState(dataset.Menus.sideMenus);
  const [garnish,setGarnish] = useState(dataset.Menus.garnish);
  const [color,setColor] = useState("fff");

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
    const number = Math.floor(Math.random() * 10);
    const changedColor = '#FF6633';
    setColor(changedColor);
    console.log(color);
  }

  return (
    <React.Fragment>
      <section className='menus'>
        <MenuList menus={mainMenu} color ={color} ></MenuList>
        <MenuList menus={sideMenu} color ={color} ></MenuList>
        <MenuList menus={garnish} color ={color} ></MenuList>
      </section>
      <section className='decide-button'>
        <DecideMenu changeColor = {changeColor}></DecideMenu>
      </section>
      <section className='add-menu'>
        <AddMenus getMenus = {getMenus} setMainMenu = {setMainMenu} setSideMenus={setSideMenus} setGarnish={setGarnish} >
        </AddMenus>
      </section>
    </React.Fragment>
  );
}
export default App;