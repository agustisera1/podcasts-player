export const convertMsToMinutes = (durationMs: number) => {
  const mins = Math.floor(durationMs / 60000);
  const secs = ((durationMs % 60000) / 1000).toFixed(0);
  return `${mins}:${(secs < '10' ? "0" : "")}${secs}`;
};
