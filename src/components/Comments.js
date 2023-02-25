export default function Comments ({comments, key, showComments}) {

 const displayComment = comments.map((comment) => {
    if (showComments === false) {
    return ( 
    <div>
    <h3 key={comment.comment}>{comment.user}</h3>
    <small>{comment.comment}</small>
    </div>
    )}
    return null
 })
    return (
        <div>
            {displayComment}
        </div>
    )}