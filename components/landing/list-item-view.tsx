import { DeleteButton } from "./delete-button";
import { PlayPauseButton } from "./play-pause-button";
import { ResetButton } from "./reset-button";
import { TimerGauge } from "./timer-gauge";
import { Timer } from "./types";

export const ListItemView = ({ timer }: { timer: Timer }) => {
  return (
    <div
      className="flex w-full items-center border border-gray-500/20 rounded-lg shadow-lg"
      style={{
        height: "132px",
        backgroundColor: "rgb(25.5, 25.5, 25.5)", // 0.1 * 255 = 25.5
      }}
    >
      {/* Label Section - 40% width */}
      <div className="flex-[0.4] h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h3 className="text-white text-lg font-thin leading-tight line-clamp-3">
            {timer.label}
          </h3>
        </div>
      </div>

      {/* Timer Gauge Section - 20% width */}
      <div className="flex-[0.2] h-full flex items-center justify-center">
        <TimerGauge timer={timer} />
      </div>

      {/* Buttons Section - 40% width */}
      <div className="flex-[0.4] h-full flex items-center justify-center px-4">
        <div className="flex items-center space-x-2">
          <PlayPauseButton
            timer={timer}
            onStart={() => console.log("Start timer:", timer.id)}
            onPause={() => console.log("Pause timer:", timer.id)}
          />
          <ResetButton onReset={() => console.log("Reset timer:", timer.id)} />
          <DeleteButton
            onDelete={() => console.log("Delete timer:", timer.id)}
          />
        </div>
      </div>
    </div>
  );
};
