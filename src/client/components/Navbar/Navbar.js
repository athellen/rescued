import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="orange" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText className="text">Rescued</NavbarText>
          <Nav className="nav" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink> 
          </NavItem>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="fas fa-user-circle" >User</i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="nav-link" onClick={() => props.history.push("/profile")}>Profile</DropdownItem>
                <DropdownItem >
                  <NavLink className="nav-link" onClick={() => props.history.push("/login")}>
                    Logout
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Example);
