import React from 'react';
import {Link} from 'react-router-dom';

import{
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
}from 'reactstrap';

function Heading() {
    return (
        <div>
        <Navbar color="dark">
        <Container>
        <NavbarBrand href="/">myTeam</NavbarBrand>
        <Nav>
        <NavItem>
        <Link className="btn btn-primary" to="/add">Add Users</Link>
        </NavItem>
        </Nav>
        </Container>
        </Navbar>
            
        </div>
    );
}

export default Heading;