export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 flex items-center justify-center">
      <div className="flex items-center justify-between">
        <a
          className="group inline-flex items-center outline-none transition duration-300 hover:bg-stone-800/5 focus:ring-2 focus:ring-pink-300 bg-orange-50/5 hover:bg-orange-50/5 rounded-xl p-2   text-orange-50 hover:text-orange-50"
          href="https://twitter.com/henrikruscon"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="X (Twitter)"
        >
          <svg
            className="size-[22px] origin-center fill-current transition duration-300 ease-out group-hover:scale-105 opacity-50 group-hover:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21.2391 3H18.6854L12.9921 9.61784L14.1261 11.2682L21.2391 3Z"></path>
            <path d="M11.2104 14.6575L10.0764 13.0071L3.2002 21H5.75403L11.2104 14.6575Z"></path>
            <path d="M8.44486 3H3.2002L15.5685 21H20.8131L8.44486 3ZM5.31391 4.16971H7.70053L18.6861 19.8835H16.2995L5.31391 4.16971Z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
