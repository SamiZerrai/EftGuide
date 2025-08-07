import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { NavLink, useLocation } from "react-router";

const Home = () => {
  let location = useLocation();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TarkovGuide</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={location.pathname === "/quests" ? true : false}>
          <NavLink color="foreground" to="/quests">
            Quests
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/" ? true : false}>
          <NavLink className="text-4xl" to="/">
            Guide
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/maps" ? true : false}>
          <NavLink to="/maps">Maps</NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Home;
