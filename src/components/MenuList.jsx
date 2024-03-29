import axios from "axios";
import React from "react";
import Menu from "./Menu";

const MenuList = (props) => {
  const handleDelete = (id) => {
    // props.setMenu(props.menus.filter((menu) => menu.id !== id));
    axios.delete(props.url + "/" + id).then(props.setMenu(props.menus));
  };
  return (
    <div>
      {props.title}
      {props.menus.map((value, index) => {
        return (
          <Menu
            id={value.id}
            name={value.name}
            content={value.content}
            key={index.toString()}
            color={props.color}
            handleDelete={handleDelete}
          ></Menu>
        );
      })}
    </div>
  );
};
export default MenuList;
