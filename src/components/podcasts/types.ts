/* Custom interface since is not available from API. */
export interface IPodcast {
  id: string;
  name?: string;
  title: string;
  artist?: string;
  image: string;
  summary: string;
  description?: string;
  author?: string;
}

/* The relevant Podcast props from the API response */
export interface IPodcastAPIObject {
  "im:image": Property[];
  "im:name": Property;
  "im:artist": Property;
  title: Property;
  summary: Property;
  id: Property;
}
interface Property {
  label: string;
  attributes?: { [key: string]: Property | any };
}
