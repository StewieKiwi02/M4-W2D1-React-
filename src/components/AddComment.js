import { useState } from "react";

const AddComment = ({ bookId, setComments }) => {
  const [commentText, setCommentText] = useState("");
  const [rating, setRating] = useState(1);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newComment = {
      comment: commentText,
      rate: rating,
      elementId: bookId,
    };

    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwM2M2ZDE4Yzg1OTAwMTUyNGE3NzciLCJpYXQiOjE3NDI4MjE5NjAsImV4cCI6MTc0NDAzMTU2MH0.sGoqe5Lw1TguXNRsiOBvT2yMentpbtySIvKNv7OVDDU"
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error("Errore nell'invio del commento");
      }

      let addedComment = await response.json();
      setComments((prevComments) => [...prevComments, addedComment]); 
      setCommentText("");
      setRating(1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={commentText} 
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder="Scrivi un commento" 
        required
      />
      
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num} ⭐</option>
        ))}
      </select>

      <button type="submit">Invia</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddComment;
