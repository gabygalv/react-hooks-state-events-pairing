export default function Details ({video, showComments, toggleComments, onUpvote, upvotes, onDownvote, downvotes}) {

    function handleUpvote () {
    onUpvote();
}

    function handleDownvote () {
    onDownvote();
}

return (
    <div>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        allowFullScreen
        title={video.title}
      />
        <h2>{video.title}</h2>
        <small>{video.views} Views | Uploaded {video.createdAt}</small>
        <div>
        <button onClick={handleUpvote}>{upvotes}👍</button>
        <button onClick={handleDownvote}>{downvotes}👎</button>
        </div>
        <div><button onClick={toggleComments}>{showComments ? "Show" : "Hide"} Comments</button></div>
    </div>
)
}