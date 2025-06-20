import { RotateCcw } from "lucide-react";
import { useState } from "react";

export const ResetButton = ({ onReset }: { onReset: () => void }) => {
  const [hovered, setHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200 ${
        hovered ? "bg-gray-500/20" : "bg-transparent"
      } ${isPressed ? "scale-90" : "scale-100"}`}
      onClick={onReset}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <RotateCcw
        size={28}
        strokeWidth={1}
        className="text-blue-400 transform rotate-45"
      />
    </button>
  );
};
