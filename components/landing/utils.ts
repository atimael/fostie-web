export const convertSecondsToTime = (seconds: number): string => {
  if (seconds <= 0) return "Done";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // If less than 1 hour, show MM:SS format, otherwise HH:MM:SS
  if (hours === 0) {
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const convertTimeToProgress = (
  remainingSeconds: number,
  initialSeconds: number
): number => {
  const progress = (initialSeconds - remainingSeconds) / initialSeconds;

  if (isNaN(progress)) {
    return 1;
  }

  return progress > 1.0 ? 1.0 : progress;
};
