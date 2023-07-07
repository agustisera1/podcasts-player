export interface IPodcastPreview extends IPodcastCardProps {
  id: string;
}
export interface IPodcastCardProps {
  title: string;
  image: string;
  author?: string;
  description?: string;
}

/* Custom interface since is not available from API. */
export interface IPodcast {
  "im:image": Property[];
  "im:name": Property;
  "im:artist": Property;
  title: Property;
  summary: Property;
  id: Property;
}

interface Property {
  label: string;
  attributes?: {[key: string]: any | Property} ;
}
