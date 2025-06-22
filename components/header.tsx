import Link from "next/link";
import AppstoreButton from "./landing/appstore-button";

export default function Header() {
  return (
    <header className="transition-shadows fixed top-0 z-40 flex w-full justify-between px-8 py-5 outline-1 outline-stone-200/0 backdrop-blur-xl duration-300 sm:py-7">
      <div className="motion-preset-blur-right motion-delay-100 text-orange-50">
        <Link href="/">
          <svg
            width="300"
            height="80"
            viewBox="0 0 300 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="10"
              y="50"
              className="fill-orange-50 text-4xl font-bold tracking-tighter"
            >
              F
            </text>

            <g transform="translate(27, 21) scale(1.2)">
              <circle
                cx="14"
                cy="15"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="14" cy="15" r="1.5" fill="black" />
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
            </g>

            <text
              x="57"
              y="50"
              className="fill-orange-50 text-4xl font-bold tracking-tighter"
            >
              stie
            </text>
          </svg>
        </Link>
      </div>
      <AppstoreButton className={"hidden sm:flex"} />
    </header>
  );
}
