import { cn } from "@/app/utils/cn";
import Link from "next/link";

export const AppleMenu = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "group rounded-2xl px-3 py-3 shadow-2xl shadow-stone-800 backdrop-blur-2xl border-opacity-30 bg-orange-50/5 absolute left-18 top-24 z-10 w-72 block xl:-right-9",
        className
      )}
      style={style}
    >
      <ul className="space-y-0.5 text-[15px] font-medium">
        <li className="flex cursor-default select-none  items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li className="flex cursor-default select-none  items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
          <Link href="/terms">Terms and Conditions</Link>
        </li>
        <li className="flex cursor-default select-none  items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50">
          <a href="mailto:hello@fostie.app">Contact Us</a>
        </li>
        <li className="group flex cursor-default select-none  items-center justify-between px-3 rounded-lg py-1 transition duration-100 ease-out first:rounded-t-xl last:rounded-b-xl relative before:absolute before:left-3 before:right-3 before:h-px before:content-[''] before:bg-orange-50/20 before:bg-opacity-15 hover:bg-stone-800 hover:bg-opacity-15 hover:text-orange-50 !mt-[13px] before:-top-[7px]">
          <div>Quit</div>
        </li>
      </ul>
    </div>
  );
};
