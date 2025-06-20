import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { Timer } from "./types";

export const PlayPauseButton = ({
  timer,
  onStart,
  onPause,
}: {
  timer: Timer;
  onStart: () => void;
  onPause: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (timer.remainingTime <= 0) return;

    if (timer.mode === "paused") {
      onStart();
    } else {
      onPause();
    }
  };

  const getIconColor = () => {
    if (timer.mode === "paused") {
      return timer.remainingTime <= 0 ? "text-gray-500" : "text-green-400";
    }
    return "text-orange-400";
  };

  return (
    <button
      className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${
        hovered ? "bg-gray-500/20" : "bg-transparent"
      } ${isPressed ? "scale-90" : "scale-100"}`}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {timer.mode === "paused" ? (
        <Play
          size={28}
          strokeWidth={1}
          className={`${getIconColor()} transition-colors duration-300`}
        />
      ) : (
        <Pause
          size={28}
          strokeWidth={1}
          className={`${getIconColor()} transition-colors duration-300`}
          fill="currentColor"
        />
      )}
    </button>
  );
};
