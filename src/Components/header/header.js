import React, {useState} from 'react'
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
  } from 'reactstrap';



  const Header = () => {
      const[isOpen, setIsOpen] = useState(false)

      const toggle = () => setIsOpen(!isOpen)
    
      return (
          <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="">Marvel/DC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="">Новости</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="">Еще что-нибудь</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Еще чето там
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            ААААА
                            </DropdownItem>
                            <DropdownItem>
                            Лол
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Я под палочкой
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
          </>
      )
  }

  export default Header