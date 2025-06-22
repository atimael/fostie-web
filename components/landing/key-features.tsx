import { cn } from "@/app/utils/cn";

const KeyFeatureSection = ({
  featureText,
  desc,
  icon,
  className,
}: {
  featureText: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center gap-4 sm:flex-row",
        className
      )}
    >
      {icon}
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-medium">{featureText}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </section>
  );
};

const QuickActions = () => {
  return (
    <div className="h-32 w-32 shrink-0 items-center justify-center">
      <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 4 L8 16 L12 16 L12 24 L20 12 L16 12 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

const VisualProgress = () => {
  return (
    <div className="h-32 w-32 shrink-0 items-center justify-center">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.3"
        />

        <circle
          cx="12"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeDasharray="60"
          strokeDashoffset="15"
          strokeLinecap="round"
          transform="rotate(-90 14 14)"
        />
      </svg>
    </div>
  );
};

const MultipleTimers = () => {
  return (
    <div className="h-32 w-32 shrink-0 items-center justify-center">
      <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="15"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="14" cy="15" r="1.5" fill="currentColor" />
        <line
          x1="14"
          y1="15"
          x2="14"
          y2="9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="15"
          x2="18"
          y2="15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <rect
          x="12.5"
          y="4"
          width="3"
          height="2"
          rx="0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="21"
          cy="7"
          r="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

const MenubarApplication = () => {
  return (
    <div className="h-32 w-32 shrink-0 items-center justify-center">
      <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="6"
          width="22"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <rect
          x="5"
          y="8"
          width="18"
          height="10"
          rx="1"
          fill="currentColor"
          opacity="0.1"
        />

        <rect
          x="5"
          y="8"
          width="18"
          height="2.5"
          rx="1"
          fill="currentColor"
          opacity="0.6"
        />

        <circle cx="7.5" cy="9.25" r="0.4" fill="white" />
        <circle cx="9" cy="9.25" r="0.4" fill="white" />
        <circle cx="10.5" cy="9.25" r="0.4" fill="white" />

        <circle cx="20" cy="9.25" r="0.8" fill="white" opacity="0.8" />
        <line
          x1="20"
          y1="8.75"
          x2="20"
          y2="9.25"
          stroke="currentColor"
          strokeWidth="0.3"
        />

        <rect
          x="11"
          y="20"
          width="6"
          height="1.5"
          rx="0.5"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

const keyFeatures = [
  {
    featureText: "Menubar Application",
    desc: "Native macOS Menubar App.",
    icon: <MenubarApplication />,
  },
  {
    featureText: "Visual Progress",
    desc: "See your progress in real-time with a visual progress indicator.",
    icon: <VisualProgress />,
  },
  {
    featureText: "Quick Actions",
    desc: "Start, pause, and reset timers with one click.",
    icon: <QuickActions />,
  },
  {
    featureText: "Multiple Timers",
    desc: "Manage several timers side-by-side.",
    icon: <MultipleTimers />,
  },
];

export const KeyFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-8 p-8">
      {keyFeatures.map((feature, index) => (
        <KeyFeatureSection
          key={feature.featureText}
          featureText={feature.featureText}
          desc={feature.desc}
          icon={feature.icon}
          className={cn(
            "motion-preset-blur-down",
            index === 0 && "motion-delay-1250",
            index === 1 && "motion-delay-1350",
            index === 2 && "motion-delay-1450",
            index === 3 && "motion-delay-1550"
          )}
        />
      ))}
    </div>
  );
};
