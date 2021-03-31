import "./components.css";
import { Link } from "react-router-dom";
import logo from "./images/anyolaLOGO.png";
import { DButtonBig, DButtonSmall, HeaderButton } from "./styles";
import React from "react";
interface HeaderProps {
  to: string;
  buttonName: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <div className="header-div">
        <img alt="" src={logo} style={{ width: "60px" }} />
      </div>
      <div className="button-div">
        <Link to={props.to}>
          <HeaderButton>{props.buttonName}</HeaderButton>
        </Link>
      </div>
    </div>
  );
};

interface DButtonProps {
  textLeft: string;
  toLeft: string;
  textRight: string;
  toRight: string;
}
export const DoubleButton = (props: DButtonProps) => {
  return (
    <div className="doubleButton">
      <Link to={props.toLeft}>
        <DButtonSmall>{props.textLeft}</DButtonSmall>
      </Link>
      <Link to={props.toRight}>
        <DButtonBig>{props.textRight}</DButtonBig>
      </Link>
    </div>
  );
};
