import { convertSecondsToTime, convertTimeToProgress } from "./utils";
import { Timer } from "./types";

const gaugeSize = 120;
const backgroundStrokeWidth = 16;
const progressStrokeWidth = 20;

export const TimerGauge = ({ timer }: { timer: Timer }) => {
  const progress = convertTimeToProgress(
    timer.remainingTime,
    timer.initialTime
  );

  const backgroundRadius = (gaugeSize - backgroundStrokeWidth) / 2;
  const progressRadius = (gaugeSize - progressStrokeWidth) / 2;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: "120px", height: "120px" }}
    >
      <svg
        className="transform translate-y-0.5"
        width={gaugeSize}
        height={gaugeSize}
        viewBox={`0 0 ${gaugeSize} ${gaugeSize}`}
      >
        <defs>
          <filter id="shadowFilter">
            <feDropShadow
              dx="4"
              dy="4"
              stdDeviation="3"
              floodColor="black"
              floodOpacity="0.1"
            />
          </filter>
        </defs>

        {/* Background circle with shadow */}
        <circle
          cx={gaugeSize / 2}
          cy={gaugeSize / 2}
          r={backgroundRadius}
          stroke="rgb(38, 38, 38)" // .appGaugeBackground equivalent
          strokeWidth={backgroundStrokeWidth}
          fill="none"
          filter="url(#shadowFilter)"
        />
      </svg>

      <div
        className="absolute rounded-full"
        style={{
          width: `${gaugeSize}px`,
          height: `${gaugeSize}px`,
          background: `${
            timer.remainingTime <= 0
              ? "#22c55e"
              : `conic-gradient(from 0deg, 
            #ff8c00 0deg,
            #ffd700 ${progress * 180}deg,
            #22c55e ${progress * 360}deg,
            transparent ${progress * 360}deg)`
          } `,
          mask: `radial-gradient(circle, transparent ${progressRadius - progressStrokeWidth / 2}px, black ${progressRadius - progressStrokeWidth / 2}px, black ${progressRadius + progressStrokeWidth / 2}px, transparent ${progressRadius + progressStrokeWidth / 2}px)`,
          WebkitMask: `radial-gradient(circle, transparent ${progressRadius - progressStrokeWidth / 2}px, black ${progressRadius - progressStrokeWidth / 2}px, black ${progressRadius + progressStrokeWidth / 2}px, transparent ${progressRadius + progressStrokeWidth / 2}px)`,
          transform: "rotate(0deg)",
        }}
      />

      {/* Center time display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-md font-thin">
          {convertSecondsToTime(timer.remainingTime)}
        </span>
      </div>
    </div>
  );
};
