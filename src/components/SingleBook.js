import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleSelection = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <>
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

      <div
        onClick={() => setShowComments(!showComments)} 
        style={{ border: "1px solid black", padding: "10px", cursor: "pointer" }}
      >
        <h2>Libro XYZ</h2>
        <p>Cliccami per vedere i commenti</p>
        {showComments && <CommentArea />}
      </div>
    </>
  );
}

export default SingleBook;
