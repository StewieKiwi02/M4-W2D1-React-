import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Spinner, Alert } from "react-bootstrap"; 
import { useTheme } from "./ThemeContext";

const CommentArea = ({ bookId }) => {
  const {theme} = useTheme();

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwM2M2ZDE4Yzg1OTAwMTUyNGE3NzciLCJpYXQiOjE3NDI4MjE5NjAsImV4cCI6MTc0NDAzMTU2MH0.sGoqe5Lw1TguXNRsiOBvT2yMentpbtySIvKNv7OVDDU"
          }
        });

        if (!response.ok) {
          throw new Error("Errore nel recupero dei commenti");
        }

        let data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [bookId]);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        borderRadius: "8px"
      }}
    >
      <h3>Commenti</h3>


      {loading && <Spinner animation="border" variant={theme === "light" ? "primary" : "light"} />}

      {error && <Alert variant={theme === "light" ? "danger" : "dark"}>{error}</Alert>}

      {!loading && !error && (
        <>
          <CommentList comments={comments} setComments={setComments} />
          <AddComment bookId={bookId} setComments={setComments} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
