import React, { useContext}  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import StoreContext from '../Store/Context';
import './style.css'


const Header = () => {
    const { setToken } = useContext(StoreContext);
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Trade diary AFT</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                        <button className="button-logout" type="button" onClick={() => setToken(null)}>
                          Sair
                        </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header