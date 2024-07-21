import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const CNavbar = ({onSearch}) =>{

    const [search,setSearch] = useState('');

    const handleInputChange = (evt)=>{
        setSearch(evt.target.value);
    }

    const handleInputKeyDown = (evt)=>{
        if(evt.key === 'Enter'){
            onSearch(search);
        }
    }

    return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Recipes of cooking</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">        
          <div className="d-flex">
            <Form.Control
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleInputChange} 
              onKeyDown={handleInputKeyDown} 
              value={search}
              style={{marginLeft:'10'}}
            />
          </div>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to='/profile/my-info'>My profile</Link>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default CNavbar;

