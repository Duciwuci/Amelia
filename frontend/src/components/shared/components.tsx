import "./components.css"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface HeaderProps{
    to: string;
    buttonName: string;
}

export const Header = (props: HeaderProps) => {
    return (
      <div className="Header">
        <div></div>
        <div className="header-div">
          <img alt="" src="../../../public/logo.svg" />
        </div>
        <div className="button-div">
          <Link to={props.to}>
            <Button
              className="sign-in-button"
              variant="contained"
              color="secondary"
            >
              {props.buttonName}
            </Button>
          </Link>
        </div>
      </div>
    );
}
