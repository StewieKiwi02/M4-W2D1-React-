import SingleComment from "./SingleComment";

const CommentList = ({ comments, setComments }) => {
  return (
    <ul>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} setComments={setComments} />
        ))
      ) : (
        <p>Nessun commento disponibile.</p>
      )}
    </ul>
  );
};

export default CommentList;
