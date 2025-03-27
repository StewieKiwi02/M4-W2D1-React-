import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { useTheme } from "./ThemeContext"; // Importiamo il tema

function MyNavBar({ searchTerm, setSearchTerm }) {
  const { theme, toggleTheme } = useTheme(); // Otteniamo il tema e la funzione per cambiarlo

  return (
    <Navbar bg={theme === "light" ? "light" : "dark"} variant={theme}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cerca un libro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
          </Form>
          <Button variant={theme === "light" ? "dark" : "light"} onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
