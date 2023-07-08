export const formatDuration = (durationMs: number) => {
  const secs = Math.floor(durationMs / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);

  return `${hours.toString().padStart(2, "0")}:${(mins % 60)
    .toString()
    .padStart(2, "0")}:${(secs % 60).toString().padStart(2, "0")}`;
};
