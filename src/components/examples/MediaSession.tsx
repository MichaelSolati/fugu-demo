import AudioPlayer from "react-h5-audio-player";

import "../../styles/components/examples/MediaSession.scss";

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

  return (
    <>
      <AudioPlayer src="/risk-studiokolomna.mp3" onPlay={onPlay} />
    </>
  );
}
