import { useState } from "react";
import { Alert, Spinner, Button, Form } from "react-bootstrap"; 
import { useTheme } from "./ThemeContext";

const SingleComment = ({ comment, setComments }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCommentText, setNewCommentText] = useState(comment.comment);
  const [newRating, setNewRating] = useState(comment.rate);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const { theme } = useTheme(); 

  const handleDelete = async () => {
    setIsLoading(true); 
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwM2M2ZDE4Yzg1OTAwMTUyNGE3NzciLCJpYXQiOjE3NDI4MjE5NjAsImV4cCI6MTc0NDAzMTU2MH0.sGoqe5Lw1TguXNRsiOBvT2yMentpbtySIvKNv7OVDDU"
        }
      });

      if (!response.ok) {
        throw new Error("Errore nell'eliminazione del commento");
      }

      setComments(prevComments => prevComments.filter(c => c._id !== comment._id));
    } catch (err) {
      setError(err.message); 
    } finally {
      setIsLoading(false); 
    }
  };

  const handleEdit = async () => {
    setIsLoading(true); 
    const updatedComment = {
      comment: newCommentText,
      rate: newRating
    };

    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwM2M2ZDE4Yzg1OTAwMTUyNGE3NzciLCJpYXQiOjE3NDI4MjE5NjAsImV4cCI6MTc0NDAzMTU2MH0.sGoqe5Lw1TguXNRsiOBvT2yMentpbtySIvKNv7OVDDU"
        },
        body: JSON.stringify(updatedComment),
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiornamento del commento");
      }

      let updatedData = await response.json();

      setComments(prevComments =>
        prevComments.map(c => (c._id === comment._id ? updatedData : c))
      );

      setIsEditing(false);
    } catch (err) {
      setError(err.message); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <li
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      {error && <Alert variant="danger">{error}</Alert>}
      {isLoading && <Spinner animation="border" variant="primary" />}

      {isEditing ? (
        <>
          <Form.Control
            as="textarea"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            style={{
              backgroundColor: theme === "light" ? "#f8f9fa" : "#555",
              color: theme === "light" ? "#000" : "#fff",
            }}
          />
          <Form.Select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            style={{
              backgroundColor: theme === "light" ? "#f8f9fa" : "#555",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} ⭐</option>
            ))}
          </Form.Select>
          <Button variant="success" onClick={handleEdit} className="mt-2">Salva</Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)} className="mt-2">Annulla</Button>
        </>
      ) : (
        <>
          <strong>{comment.author}:</strong> {comment.comment} ⭐ {comment.rate}/5
          <div>
            <Button variant="warning" size="sm" onClick={() => setIsEditing(true)}>Modifica</Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>Elimina</Button>
          </div>
        </>
      )}
    </li>
  );
};

export default SingleComment;
