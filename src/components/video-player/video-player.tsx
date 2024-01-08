export type VideoPlayerProps = {
  videoLink: string;
  posterSrc: string;
}

export function VideoPlayer(props: VideoPlayerProps) {
  return (
    <video
      src={props.videoLink}
      poster={props.posterSrc}
      width="100%"
      height="100%"
      muted
      autoPlay
    />
  );
}
