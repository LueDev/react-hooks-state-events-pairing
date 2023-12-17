import video from "../data/video.js";
import {useState} from "react"

function App() {

  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)
  const [showComments, setShowComments] = useState(true)
  
  console.log("Here's your data:", video);

  function handleLike(){
    setLikes(() => likes+1)
  }

  function handleDislike(){
    setDislikes(() => dislikes+1)
  }

  function handleToggleCommentRender(){
    setShowComments(() => !showComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleLike}>{likes} &#128077;</button>
      <button onClick={handleDislike}>{dislikes} &#128078;</button>
      <br/><br/>
      <button onClick={handleToggleCommentRender}>Show Comments</button>
      <hr/>

      <h1>{video.comments.length} comments</h1>
      {showComments && video.comments.map((comment) => {
          return (<>
            <h1>{comment.user}</h1>
            <p>{comment.comment}</p>
            </>)
        })}

    </div>
  );
}

export default App;
