import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

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
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
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
          <button 
            variant="primary"
            onClick={() => navigate(`/BookDetails/${props.book.ASIN}`)}
            style={{ width: "100%", marginTop: "10px" }}
          >
            Vedi dettagli
          </button>
        </Card.Body>
      </Card>

      <div
        onClick={() => setShowComments(!showComments)} 
        style={{
          border: "1px solid black",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#eee" : "#555",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h2>{props.book.title}</h2>
        <p>Cliccami per vedere i commenti</p>
        {showComments && <CommentArea bookId={props.book.id} />}
      </div>
    </>
  );
}

export default SingleBook;
