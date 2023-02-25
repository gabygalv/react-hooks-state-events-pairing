import React, { useState } from "react";
import video from "../data/video.js";
import Details from "./Details";
import Comments from "./Comments.js";

function App() {
const [showComments, setShowComments] = useState('false')
const [upvotes, setUpvotes] = useState(video.upvotes)
const [downvotes, setDownvotes] = useState(video.downvotes)


function toggleComments() {
  setShowComments(!showComments)
}

function onUpvote() {
  setUpvotes(upvotes + 1)
}

function onDownvote() {
  setDownvotes(downvotes + 1)
}

  return ( <div className="App">
      <Details video={video}
      showComments={showComments}
      toggleComments={toggleComments}
      upvotes={upvotes}
      onUpvote={onUpvote}
      onDownvote={onDownvote}
      downvotes={downvotes}
      />
      <Comments comments={video.comments} 
      key={video.comments.comments}
      showComments={showComments}
      toggleComments={toggleComments}/>
    </div>
  );
}

export default App;
