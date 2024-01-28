/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";

import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/SideDrawer";

const Header = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? <SideDrawer /> : <Navbar page={props.page} />;
};

export default Header;
