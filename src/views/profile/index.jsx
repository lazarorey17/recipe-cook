import {  Outlet, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Profile = () =>{
    const navigate = useNavigate();

    const handleTabClick = (path) =>{
        navigate(`/profile/${path}`);
    }

    return(
        <div>
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>handleTabClick('my-info')}>My info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>handleTabClick('liked-recipes')}>Liked recipes</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Profile;