import * as uploadAPI from '../../utilities/uploads-api';
import './UploadCard.css';

export default function UploadCard({ upload }) {
  async function handleFollow() {
    await uploadAPI.followUser(upload.user._id);
  }

    return (
      <article className="UploadCard">
        {upload.isVideo ? 
          <video src={upload.url} autoPlay muted controls alt={upload.title} />
          :
          <img src={upload.url} alt={upload.title} />
        }
        <div className="uploadinfo">
          <div>{upload.title}</div>
          <div>@{upload.user.name}</div>
          <div><button onClick={handleFollow}>follow</button></div>
          <div><i class="fas fa-heart"></i></div>
        </div>
      </article>
    );
} 