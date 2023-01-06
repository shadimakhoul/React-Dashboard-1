import React, { Component } from "react";
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import Avatar from "./ItemsComponents/Avatar";
import SearchBox from "./ItemsComponents/SearchBox";
import NotificationButton from "./ItemsComponents/Buttons/NotificationButton";
import UsernameButton from "./ItemsComponents/Buttons/UsernameButton";
import MessageButton from "./ItemsComponents/Buttons/MessageButton";
import HomeButton from "./ItemsComponents/Buttons/HomeButton";


function Header(props){
        return (
          <>
            <Navbar>
              <Nav>
                <Col xs={4}><SearchBox /></Col>
                <Col className="avatarCol" xs={5}>
                  <MessageButton />
                  <NotificationButton />
                  <UsernameButton onClick={props.onClick} />
                  <Avatar />
                </Col>
                <Col className="homeCol" xs={3}>
                  <p className="location">الموقع</p>
                  <HomeButton />
                </Col>
              </Nav>
            </Navbar>
          </>
          );        
}


export default Header