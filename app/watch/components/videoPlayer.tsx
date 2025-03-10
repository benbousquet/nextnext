export default function VideoPlayer({ videoId }: { videoId: string }) {
  return (
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/" + videoId}
      allowFullScreen
    ></iframe>
  );
}
