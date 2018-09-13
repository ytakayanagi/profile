import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import Sticky from 'react-stickynode';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Sticky innerZ={1000}>
                <Navbar className="py-3" color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Yujin Takayanagi</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#work">Work</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#contact">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Sticky>
        );
    }
}

export default Navigation;