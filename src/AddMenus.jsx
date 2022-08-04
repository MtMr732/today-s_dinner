import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import datesetDefault from './dataset';
import MenuItem from '@mui/material/MenuItem';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddMenus = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState('');
  let [name, setName] = useState("");
  let [content, setContent] = useState("");
  // let name = "";
  // let content = "";

  const currencies = [
  {
    value: 'mainMenu',
    label: '主菜',
  },
  {
    value: 'sideMenu',
    label: '副菜',
  },
  {
    value: 'garnish',
    label: '付け合わせ',
  }
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleName = (str) => {
    setName(str);
  }

  const handleContent = (str) =>{
    setContent(str);
  }

  // const send = () => {
  //   const garnishList = datesetDefault.Menus.garnish;
  //   name = handleName(document.querySelector('#menu-name').value);
  //   content = handleContent(document.querySelector('#menu-content').value);
  //   // console.log(name,content);
  //   const addedObject = {name,content};
  //   garnishList.push(addedObject);
  //   console.log(garnishList);
  // }


  const sendDate = () =>{
    const menuType = document.querySelector('#menu-type').innerHTML;
      // console.log(Object.prototype.toString.call(menuType.innerHTML));
      // console.log(menuType.innerHTML);
    const name = document.querySelector('#menu-name').value;
    const content = document.querySelector('#menu-content').value;
    const addedObject = {name,content};
      console.log(name, content);
    // sendメソッドを下記に移植
    // garnishList.push(addedObject);
    // props.getMenus();
    // 条件式のmenuTypeが機能していない
    switch(menuType){
      case '主菜':
        datesetDefault.Menus.mainMenu.push(addedObject)
        props.getMenus();
        // jsonファイルでデータ通信するときに使用
        // fetch(datesetDefault.Menus.mainMenu,{
        //   method:'POST',
        //   body:JSON.stringify(datesetDefault),
        // }).then(()=>{
        //   alert("メニューの追加が完了しました。")
        //   name = "";
        //   content = "";
        // })
        break
      case '副菜':
        datesetDefault.Menus.sideMenus.push(addedObject)
        props.getMenus();
        // jsonファイルでデータ通信するときに使用
          // fetch(datesetDefault.Menus.sideMenus,{
          //   method:'POST',
          //   body:JSON.stringify(datesetDefault),
          // }).then(()=>{
          //   alert("メニューの追加が完了しました。")
          //   name = "";
          //   content = "";
          // })
        break
      case '付け合わせ':
        // console.log(menuType.value);
        datesetDefault.Menus.garnish.push(addedObject)
        props.getMenus();
        // jsonファイルでデータ通信するときに使用
          // fetch(datesetDefault.Menus.sideMenus,{
          //   method:'POST',
          //   body:JSON.stringify(datesetDefault),
          // }).then(()=>{
          //   alert("メニューの追加が完了しました。")
          //   name = "";
          //   content = "";
          // })
        break
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>メニューを追加する</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="menu-type"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="メニューの種別を入力してください"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField id="menu-name" label="メニュー名" variant="outlined"/>
            <TextField id="menu-content" label="内容" variant="outlined"/>
          </Box>
          <Button variant='contained' onClick={sendDate}>
            追加
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
export default  AddMenus
