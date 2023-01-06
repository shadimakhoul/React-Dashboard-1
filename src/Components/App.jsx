import React, { useState } from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import NumberInfo from "./NumberInfo";
import Chart1 from "./Chart1";
import UserForm from "./UserForm";




function App() {
    const [userForm, setuserForm] = useState(false)

    return (<div className="dashboardDiv">
        <Header onClick={() => {setuserForm(!userForm)}}/>
        {userForm && <UserForm />}
        <Container id="homeContainer">
            <Row>
                <Col xs={10}>
                    <NumberInfo />
                    <Chart1/>
                </Col>
                <Col className="sidebar" xs={2}>
                    <Sidebar />
                </Col>
            </Row>

        </Container>
    </div>)
}

export default App