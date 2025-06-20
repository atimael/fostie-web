export type Timer = {
  id: string;
  label: string;
  remainingTime: number; // in seconds
  initialTime: number; // in seconds
  mode: "paused" | "running";
};
