import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap"; 

const SingleComment = ({ comment, setComments }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCommentText, setNewCommentText] = useState(comment.comment);
  const [newRating, setNewRating] = useState(comment.rate);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

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
    <li>

      {error && <Alert variant="danger">{error}</Alert>}

      {isLoading && <Spinner animation="border" variant="primary" />}

      {isEditing ? (
        <>
          <textarea value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} />
          <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} ⭐</option>
            ))}
          </select>
          <button onClick={handleEdit}>Salva</button>
          <button onClick={() => setIsEditing(false)}>Annulla</button>
        </>
      ) : (
        <>
          <strong>{comment.author}:</strong> {comment.comment} ⭐ {comment.rate}/5
          <button onClick={() => setIsEditing(true)}>Modifica</button>
          <button onClick={handleDelete}>Elimina</button>
        </>
      )}
    </li>
  );
};

export default SingleComment;
