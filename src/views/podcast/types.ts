export interface PodcastPreview {
  title: string;
  image: string;
  author?: string;
  id: string;
}

/* Will use a custom interface since is not available from API. */
export interface Podcast {
  /* Only declare keys that will be used for this case. */
  "im:image": Property[];
  "im:name": Property;
  title: Property;
  summary: Property;
  id: Property;
}
interface Property {
  label: string;
  attributes?: {[key: string]: any | Property} ;
}
