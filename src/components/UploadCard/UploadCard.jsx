import './UploadCard.css';

export default function UploadCard({ upload }) {
    return (
      <article className="UploadCard">
        {upload.isVideo ? 
          <video src={upload.url} autoPlay muted controls alt={upload.title} />
          :
          <img src={upload.url} alt={upload.title} />
        }
        <div>{upload.title}</div>
      </article>
    );
} 