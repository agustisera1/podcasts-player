import { FC, AudioHTMLAttributes } from "react";

interface IMediaPlayerProps {
  /*  Could config if required according to: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
      For this sample, will keep it basic.
  */
  src: string;
  config?: AudioHTMLAttributes<HTMLAudioElement>;
}

export const MediaPlayer: FC<IMediaPlayerProps> = ({ src: episodeUrl, config }) => (
  <audio style={{ width: "100%" }} controls src={episodeUrl} {...config}>
    {episodeUrl}
  </audio>
);