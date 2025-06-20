"use client";

import React from "react";
import { Settings } from "lucide-react";
import { cn } from "@/app/utils/cn";
import { ListItemView } from "./list-item-view";
import { Timer } from "./types";

const timers: Timer[] = [
  {
    id: "1",
    label: "Work",
    remainingTime: 376,
    initialTime: 3600,
    mode: "running",
  },
  {
    id: "2",
    label: "Play chess",
    remainingTime: 0,
    initialTime: 2400,
    mode: "paused",
  },
  {
    id: "3",
    label: "Read",
    remainingTime: 0,
    initialTime: 1800,
    mode: "paused",
  },
];

export const TimerContent = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn("max-w-2xl mx-auto rounded-2xl w-[482px]", className)}
      style={{
        background: `linear-gradient(135deg, 
        rgb(25.5, 25.5, 25.5) 0%, 
        rgb(25.5, 25.5, 25.5) 50%, 
        rgb(51, 51, 51) 100%)`,
        ...style,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6  flex-shrink-0">
        <button className="flex items-center space-x-2 px-6 py-2 border border-gray-500/20 hover:bg-neutral-600/30 text-white rounded-lg transition-colors">
          <span className="font-thin text-xs">Add Timer</span>
        </button>

        <button className="p-2 text-gray-400  hover:bg-neutral-600/30 rounded-lg transition-colors border border-gray-500/20">
          <Settings size={14} />
        </button>
      </div>

      <div className="flex-1 ">
        <div className="px-4 py-2 space-y-2 h-full">
          {timers.map((timer) => (
            <ListItemView key={timer.id} timer={timer} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 pb-2 px-4 flex-shrink-0 flex justify-end">
        <button className="font-thin text-sm text-gray-400 hover:text-gray-200 transition-colors text-right">
          Quit
        </button>
      </div>
    </div>
  );
};
