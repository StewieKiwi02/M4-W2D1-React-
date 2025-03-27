import { useState } from "react";
import { useTheme } from "./ThemeContext";

const AddComment = ({ bookId, setComments }) => {
  const { theme } = useTheme();

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
    <form onSubmit={handleSubmit}
      style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        borderRadius: "8px"
      }}
    >
      <textarea 
        value={commentText} 
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder="Scrivi un commento" 
        required
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#444",
          color: theme === "light" ? "#000" : "#fff",
          border: "1px solid",
          borderColor: theme === "light" ? "#ccc" : "#666",
          width: "100%",
          padding: "0.5rem"
        }}
      />
      
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#444",
          color: theme === "light" ? "#000" : "#fff",
          borderColor: theme === "light" ? "#ccc" : "#666",
          margin: "0.5rem 0"
        }}  
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num} ⭐</option>
        ))}
      </select>

      <button type="submit"
        style={{
          backgroundColor: theme === "light" ? "#007bff" : "#555",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer"
        }}
      >
        Invia
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddComment;
