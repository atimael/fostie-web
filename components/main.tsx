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
        <h1 className="text-7xl font-bold text-orange-50 tracking-tight max-w-3xl mx-auto motion-preset-blur-down motion-delay-500 leading-18">
          Your focus companion for deep work
        </h1>
      </section>

      <section className="flex w-full mb-24 flex-col items-center motion-preset-blur-up motion-delay-1000">
        <div className="relative h-full w-full sm:aspect-[1.95/1]">
          <div
            className="absolute left-24 justify-between right-24 top-8 z-10 flex h-12 items-center rounded-[1.25rem] bg-orange-50/5 pl-3 pr-5 text-orange-50 backdrop-blur-xl"
            style={{
              transform: `translateY(${parallax / 30}px)`,
            }}
          >
            <AppleIcon />
            <div className="flex items-center">
              <MediaPlayer className="mr-5" onTimeClick={toggleTimerDemo} />
              <MenuBarApps />
            </div>
          </div>

          <div className="absolute inset-0 h-full sm:rounded-[3rem] rounded-[2.5rem] overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover select-none blur sm:blur-none rounded-[2.5rem]"
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
              className="absolute -right-[4.5rem] top-[4rem] scale-90"
              style={{
                transform: `translateY(${parallax / 30}px)`,
              }}
            />
          )}
          <AppleMenu
            className="left-[5rem] top-[6rem]"
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
