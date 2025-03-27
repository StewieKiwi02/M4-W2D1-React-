import React, { useState } from "react";
import { Alert, Container, Button } from "react-bootstrap";
import { useTheme } from "./ThemeContext"; 

function MyAlert({ title = "Ciao!", message = "Questo è un avviso importante!", variant = "success" }) {
  const [show, setShow] = useState(true);
  const { theme } = useTheme(); 

  return (
    <Container className="my-4 text-center">
      <h4 style={{ color: theme === "light" ? "#000" : "#fff" }}>
        {title}
      </h4>

      {show && (
        <Alert
          variant={variant}
          onClose={() => setShow(false)}
          dismissible
          style={{
            backgroundColor: theme === "light" ? "#d4edda" : "#333",
            color: theme === "light" ? "#155724" : "#fff",
            borderColor: theme === "light" ? "#c3e6cb" : "#444"
          }}
        >
          {message}
        </Alert>
      )}

      {!show && (
        <Button onClick={() => setShow(true)} variant="primary">
          Mostra Avviso
        </Button>
      )}
    </Container>
  );
}

export default MyAlert;
