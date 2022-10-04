import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

function NavbarComponent(props) {
  const { token } = UseAuth();

  return (
    <>
      {props.name === "Profile" ? (
        token ? (
          <NavLink to={`/${props.url}`} style={props.style}>
            Profile
          </NavLink>
        ) : null
      ) : (
        <NavLink to={`/${props.url}`} style={props.style}>
          {props.name}
        </NavLink>
      )}
    </>
  );
}

export default NavbarComponent;
