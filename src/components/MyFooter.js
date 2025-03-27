import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { useTheme } from "./ThemeContext";

function MyFooter (){
    
    const {theme} = useTheme();

    return (

        <footer
            style={{
                backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                padding: "20px 0",
            }}
        >
            <Container>
            <Row>
            <Col md={4}>
                <h5>About Us</h5>
                <p>We are a company that loves to provide the best products.</p>
            </Col>
            <Col md={4}>
                <h5>Quick Links</h5>
                <Nav>
                <Nav.Link href="#" style={{ color: theme === "light" ? "#000" : "#fff" }}>Home</Nav.Link>
                <Nav.Link href="#" style={{ color: theme === "light" ? "#000" : "#fff" }}>About</Nav.Link>
                <Nav.Link href="#" style={{ color: theme === "light" ? "#000" : "#fff" }}>Contact</Nav.Link>
                </Nav>
            </Col>
            <Col md={4}>
                <h5>Contact</h5>
                <p>Email: support@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </Col>
            </Row>
            <Row>
            <Col className="text-center mt-4">
                <p>&copy; 2025 EpiBook. All Rights Reserved.</p>
            </Col>
            </Row>
            </Container>
        </footer>
    );
}

export default MyFooter;