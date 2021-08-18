import * as uploadAPI from '../../utilities/uploads-api';
import { useState } from 'react';
import Comment from '../Comments/Comments';
import './UploadCard.css';

export default function UploadCard({ upload }) {
  const [video, setVideo] = useState(upload);
  async function handleFollow() {
    await uploadAPI.followUser(upload.user._id);
  }

  async function handleLike() {
    await uploadAPI.createLike(upload._id);
  } 

  async function handleFavorite() {
    await uploadAPI.createFavorite(upload._id);
  } 

    return (
      <article className="UploadCard">
        {video.isVideo ? 
          <video src={video.url} autoPlay muted controls alt={video.title} />
          :
          <img src={video.url} alt={video.title} />
        }
        <div className="uploadinfo">
          <div>{video.title}</div>
          <div>@{video.user.name}</div>
          <div><button onClick={handleFollow}>follow</button></div>
          <div><i onClick={handleFavorite} className="fas fa-heart"></i></div>
          <div><i onClick={handleLike} className="fas fa-thumbs-up"></i></div>
          <div><i className="fas fa-share"></i></div>
        </div>
        <div className="Hashtags">
          {
            video.hashtags && video.hashtags.map((h) => (
              <div>
                <h4>{h.name}</h4>
              </div>
            ))
          }
        </div>
        <div className="Comment">
          {
            video.comments && video.comments.map((c) => (
              <div className="commentBox">
                <p>{c.content}</p>
              </div>
            ))
          }
          <Comment upload={video} setUpload={setVideo} />
        </div>
      </article>
    );
} 