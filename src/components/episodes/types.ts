export interface IEpisode {
  trackId: number;
  trackName: string;
  episodeUrl: string;
  releaseDate: string;
  /* Duration in miliseconds */
  trackTimeMillis: number;
  description: string;
  sponsors?: string[];
}