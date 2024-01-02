import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import classes from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={classes.parent}>
      <div>
        {" "}
        <a href="#">
          <Button variant="outline">Item 1</Button>
        </a>
      </div>
      <div className={classes.item}>
        <div>
          <a href="#">
            <Button textAlign="center" variant="outline">
              Home
            </Button>
          </a>
        </div>
        <div>
          {" "}
          <a href="#">
            <Button variant="outline">Reactive</Button>
          </a>
        </div>
        <div>
          {" "}
          <a href="#">
            <Button variant="outline">Think in Another Way</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
