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
import AnchorLink from 'react-anchor-link-smooth-scroll';

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

    onClick() {
        this.setState(state => ({

        }))
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
                                    <AnchorLink offset='75' href="#about"><NavLink>About</NavLink></AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink offset='75' href="#work"><NavLink>Work</NavLink></AnchorLink>
                                </NavItem>
                                <NavItem>
                                    <AnchorLink offset='75' href="#contact"><NavLink>Contact</NavLink></AnchorLink>
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