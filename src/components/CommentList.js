import SingleComment from "./SingleComment";
import { useTheme } from "./ThemeContext";

const CommentList = ({ comments, setComments }) => {
  const {theme} = useTheme();

  return (
    <ul
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      {comments.length > 0 ? (
        comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} setComments={setComments} />
        ))
      ) : (
        <p style={{ textAlign: "center" }}>Nessun commento disponibile.</p>
      )}
    </ul>
  );
};

export default CommentList;
