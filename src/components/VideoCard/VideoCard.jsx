export default function VideoCard({ upload }) {
    return (
      <article className="VideoCard">
        <img src={upload.url} alt={upload.title} />
        <div>{upload.title}</div>
      </article>
    );
  } 