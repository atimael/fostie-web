"use client";

import { cn } from "@/app/utils/cn";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

interface MediaPlayerProps {
  duration?: string;
  isPlaying?: boolean;
  onPlayToggle?: () => void;
  onTimeClick?: () => void;
  className?: string;
}

export default function MediaPlayer({
  duration = "06:16",
  isPlaying = false,
  onPlayToggle,
  onTimeClick,
  className = "",
}: MediaPlayerProps) {
  const [internalIsPlaying, setInternalIsPlaying] = useState(isPlaying);

  const handlePlayToggle = () => {
    if (onPlayToggle) {
      onPlayToggle();
    } else {
      setInternalIsPlaying(!internalIsPlaying);
    }
  };

  const handleTimeClick = () => {
    if (onTimeClick) {
      onTimeClick();
    }
  };

  return (
    <div
      className={cn(
        `inline-flex items-center bg-orange-50/10 rounded-lg overflow-hidden`,
        className
      )}
    >
      {/* Play/Pause Button Section */}
      <button
        onClick={handlePlayToggle}
        className="flex items-center justify-center p-1 hover:bg-orange-50/20 transition-colors duration-200"
        aria-label={internalIsPlaying ? "Pause" : "Play"}
      >
        {internalIsPlaying ? (
          <Pause className="w-5 h-5 text-[#ff8c00] fill-[#ff8c00]" />
        ) : (
          <Play className="w-5 h-5 text-[#22c55e] fill-[#22c55e]" />
        )}
      </button>

      {/* Divider */}
      <div className="w-px h-4 bg-gray-300/50" />

      {/* Time Display Section */}
      <button
        onClick={handleTimeClick}
        className="px-4 py-1 text-white font-mono text-sm hover:bg-orange-50/10 transition-colors duration-200 "
        aria-label={`Duration: ${duration}`}
      >
        {duration}
      </button>
    </div>
  );
}
