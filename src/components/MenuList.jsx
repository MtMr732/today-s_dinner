import React, { useRef } from "react";
import Menu from "./Menu"

const MenuList = (props) => {
  const handleDelete = (id) =>{
    props.setMenu(props.menus.filter((menu) => menu.id !== id))
  }
  return (
    <div>
      {props.title}
      {props.menus.map((value,index) => {
        return <Menu id = {value.id} name = {value.name} content = {value.content} key={index.toString()} color = {props.color} handleDelete ={handleDelete}></Menu>
      })}
    </div>
  )
};
export default MenuList