"use client";

import { useState, useEffect } from "react";
import { AppleMenu } from "./landing/apple-menu";
import { MenuBarApps } from "./landing/menu-bar-apps";
import { TimerContent } from "./landing/timer-content";
import MediaPlayer from "./media-player";
import { AppleIcon } from "./landing/apple-icon";
import { KeyFeatures } from "./landing/key-features";

export default function Main() {
  const [timerShow, setTimerShow] = useState(true);
  const [parallax, setParallax] = useState(0);

  const toggleTimerDemo = () => {
    setTimerShow((state) => !state);
  };

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      const scrolled = window.scrollY;
      animationFrameId = requestAnimationFrame(() => {
        setParallax(scrolled);
        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="flex w-full max-w-screen-xl flex-col items-center">
      <section
        className="mb-24"
        style={{
          transform: `translateY(-${parallax / 5}px)`,
        }}
      >
        <h1 className="motion-preset-blur-down motion-delay-500 mx-auto max-w-3xl text-7xl leading-18 font-bold tracking-tight text-orange-50">
          Your focus companion for deep work
        </h1>
      </section>

      <section className="motion-preset-blur-up motion-delay-1000 xs:mb-64 mb-96 w-full flex-col items-center sm:mb-64 sm:flex md:mb-72 lg:mb-24">
        <div className="relative aspect-[1.95/1] h-full w-full">
          <div
            className="absolute top-8 right-8 left-8 z-10 flex h-12 items-center justify-between rounded-[1.25rem] bg-orange-50/5 pr-5 pl-3 text-orange-50 backdrop-blur-xl md:right-24 md:left-24"
            style={{
              transform: `translateY(${parallax / 30}px)`,
            }}
          >
            <AppleIcon className={"hidden sm:block"} />
            <div className="z-20 flex items-center">
              <MediaPlayer className="mr-5" onTimeClick={toggleTimerDemo} />
              <MenuBarApps />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 h-full overflow-hidden rounded-[2.5rem] sm:rounded-[3rem]">
            <div className="relative h-full w-full">
              <img
                className="h-full w-full rounded-[2.5rem] object-cover select-none"
                src="/macos.jpg"
                alt="Wallpaper"
                style={{
                  transform: `translateY(-${(parallax / 50) * 5}px)`,
                }}
              />
            </div>
          </div>

          {timerShow && (
            <TimerContent
              className="absolute top-[-2.5rem] left-2/4 z-30 -translate-x-2/4 scale-50 sm:top-[1.5rem] sm:-right-[1.5rem] sm:translate-0 sm:scale-75 md:top-[6rem] md:scale-100"
              style={{
                transform: `translateY(${parallax / 30}px)`,
              }}
            />
          )}
          <AppleMenu
            className="top-[6rem] left-[5rem] hidden sm:block"
            style={{
              transform: `translateY(${parallax / 30}px)`,
            }}
          />
        </div>
      </section>

      <section>
        <KeyFeatures />
      </section>
    </section>
  );
}
