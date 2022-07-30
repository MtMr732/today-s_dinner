import React from "react";
import Menu from "./Menu"

const MenuList = (props) => {
  return (
    <div>
      {props.menus.map((value,index) => {
        return <Menu name = {value.name} content = {value.content} key={index.toString()}></Menu>
      })}
    </div>
  )
};
export default MenuList