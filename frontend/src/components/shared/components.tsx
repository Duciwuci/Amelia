import "./components.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./images/anyolaLOGO.png";
import {HeaderButton} from "./styles";
interface HeaderProps {
  to: string;
  buttonName: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <div className="header-div">
        <img alt="" src={logo} style={{width:"60px"}} />
      </div>
      <div className="button-div">
        <Link to={props.to}>
          <HeaderButton>
              {props.buttonName}
          </HeaderButton>
        </Link>
      </div>
    </div>
  );
};
