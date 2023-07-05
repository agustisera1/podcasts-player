// If the type schemas were available, I'd use it here to improve the formatting.
export const getPodcastPreviewData = (podcast: any) => ({
  title: podcast["im:name"].label,
  image: podcast["im:image"][2].label, // Just for demo, picked the highest res image.
});