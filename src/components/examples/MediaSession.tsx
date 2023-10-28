export default function MediaSession() {
  const onPlay = () => {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "Risk",
      artist: "StudioKolomna",
      album: "Risk",
      artwork: [
        {
          src: "/risk-album-cover.webp",
          sizes: "200x200",
          type: "image/webp",
        },
      ],
    });
  };

  return <audio onPlay={onPlay} controls src="/risk-studiokolomna.mp3" />;
}
