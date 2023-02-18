import React from "react";

const Header = ({datauser}) => {
  return (
    <header>
      <h2>Olá,{datauser.name}</h2>
      <span>{datauser.course_module}</span>
    </header>
  );
};

export default Header;
