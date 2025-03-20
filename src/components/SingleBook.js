import React, { useState } from "react";
import { Card } from "react-bootstrap";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);


  const toggleSelection = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px",
        border: selected ? "3px solid red" : "none", 
        cursor: "pointer"
      }}
    >
      <Card.Img
        variant="top"
        src={props.book.cover}
        alt={props.book.title}
        onClick={toggleSelection}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
