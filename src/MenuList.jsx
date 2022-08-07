import React from "react";
import Menu from "./Menu"

const MenuList = (props) => {
  return (
    <div>
      {props.menus.map((value,index) => {
        return <Menu id = {value.id} name = {value.name} content = {value.content} key={index.toString()} color = {props.color}></Menu>
      })}
    </div>
  )
};
export default MenuList